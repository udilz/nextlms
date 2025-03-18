import React from "react";

import { Button } from "@/components/ui/button";

import { loginWithGoogleAction } from "./action.social-login";

export const SocialLoginBtn = () => {
  return (
    <form action={loginWithGoogleAction}>
      <Button variant="secondary">Continue With Google</Button>
    </form>
  );
};
