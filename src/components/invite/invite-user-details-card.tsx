import { cn } from "@/lib/utils";
import ApiClient from "@/services/api-client";
import { GetFfernFriendResponse } from "@/services/types/get-ffern-friend-response-type";
import {
  UpdateFfernFriendsRequest,
  UpdateFfernFriendsRequestSchema,
} from "@/services/types/update-ffern-friends-request-type";
import { ALLOWED_COUNTRIES } from "@/utils/select-data";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// ------------------------------------------------------------

interface Props extends React.ComponentProps<"div"> {
  userData: GetFfernFriendResponse;
}

const InviteUserDetailsCard: React.FC<Props> = ({ userData, ...props }) => {
  const [updatedUserData, setUpdatedUserData] = useState(false);
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      addressLineOne: userData.addressLineOne,
      addressLineTwo: userData.addressLineTwo,
      city: userData.city,
      postcode: userData.postcode,
      stateOrCounty: userData.stateOrCounty,
      country: userData.country,
    },
    validationSchema: toFormikValidationSchema(UpdateFfernFriendsRequestSchema),
    onSubmit: (values) => {
      if (UpdateFfernFriendsRequestSchema.parse(values)) {
        updateMutation.mutate({
          ffernFriendId: userData.id,
          data: values as UpdateFfernFriendsRequest,
        });
      }
    },
    enableReinitialize: true,
    validateOnMount: true,
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const updateMutation = useMutation({
    mutationFn: async (values: {
      ffernFriendId: string;
      data: UpdateFfernFriendsRequest;
    }) => {
      return ApiClient.ffernFriends.updateFriend(values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("getFriend");
      setUpdatedUserData(true);
      toast.success("Address updated successfully");
    },
    onError: () => {
      toast.error("An error occurred");
    },
  });

  if (updatedUserData) {
    return (
      <div className="flex w-full max-w-screen-lg flex-col gap-2 rounded border-[1px] border-solid border-green-200 bg-green-100 p-4 text-foreground">
        <p>Thank you!</p>
        <p>Your new fragrance will be with you shortly.</p>
      </div>
    );
  }

  return (
    <form className="w-full max-w-screen-lg">
      <div
        className={cn(
          `bg-card-form flex w-full max-w-screen-lg flex-col gap-4 rounded p-4`,
          props.className,
        )}
        {...props}
      >
        <div className="flex flex-row gap-4">
          <Input
            name={"firstName"}
            label="First Name"
            value={formik.values.firstName}
            fullWidth
            onChange={(e) => formik.setFieldValue("firstName", e.target.value)}
            onBlur={() => formik.setFieldTouched("firstName")}
            error={formik.touched.firstName && formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <Input
            name={"lastName"}
            label="Last Name"
            value={formik.values.lastName}
            fullWidth
            onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
            onBlur={() => formik.setFieldTouched("lastName")}
            error={formik.touched.lastName && formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
        <Input
          name={"addressLineOne"}
          label="Address line 1"
          value={formik.values.addressLineOne}
          fullWidth
          onChange={(e) =>
            formik.setFieldValue("addressLineOne", e.target.value)
          }
          onBlur={() => formik.setFieldTouched("addressLineOne")}
          error={formik.touched.addressLineOne && formik.errors.addressLineOne}
          helperText={
            formik.touched.addressLineOne && formik.errors.addressLineOne
          }
        />
        <Input
          name={"addressLineTwo"}
          label="Address line 2 (optional)"
          value={formik.values.addressLineTwo}
          fullWidth
          onChange={(e) =>
            formik.setFieldValue("addressLineTwo", e.target.value)
          }
          onBlur={() => formik.setFieldTouched("addressLineTwo")}
          error={formik.touched.addressLineTwo && formik.errors.addressLineTwo}
        />
        <div className="flex flex-row gap-4">
          <Input
            name={"city"}
            label="City"
            value={formik.values.city}
            fullWidth
            onChange={(e) => formik.setFieldValue("city", e.target.value)}
            onBlur={() => formik.setFieldTouched("city")}
            error={formik.touched.city && formik.errors.city}
          />
          <Input
            name={"postcode"}
            label="Postcode"
            value={formik.values.postcode}
            fullWidth
            onChange={(e) => formik.setFieldValue("postcode", e.target.value)}
            onBlur={() => formik.setFieldTouched("postcode")}
            error={formik.touched.postcode && formik.errors.postcode}
          />
        </div>
        <Input
          name={"stateOrCounty"}
          label="State/County"
          value={formik.values.stateOrCounty}
          fullWidth
          onChange={(e) =>
            formik.setFieldValue("stateOrCounty", e.target.value)
          }
          onBlur={() => formik.setFieldTouched("stateOrCounty")}
          error={formik.touched.stateOrCounty && formik.errors.stateOrCounty}
        />
        <Select
          value={formik.values.country}
          onValueChange={(e) => formik.setFieldValue("country", e)}
        >
          <SelectTrigger className="w-full" onClick={() => {}}>
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {ALLOWED_COUNTRIES.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          fullWidth
          type="submit"
          onClick={handleSubmit}
          disabled={!formik.isValid}
          loading={updateMutation.isLoading}
        >
          Confirm Address
        </Button>
      </div>
    </form>
  );
};

export default InviteUserDetailsCard;
