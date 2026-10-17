import { Lock, LogOut, Trash2 } from "lucide-react";

import { Badge } from "../../../@/components/ui/badge";
import { Button } from "../../../@/components/ui/button";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import { useState } from "react";
import type { UserProfileData } from "./profile.types";
import { profileSchema } from "./profile.schema";
import { profileAPI } from "./profile.api";
import { toast } from "sonner";
import { GENERIC_MESSAGE } from "@/constants/generic.constant";
import { handleApiError } from "@/api/handleApiError";


const user_name =
  localStorage.getItem("user_name") || "Enter your username....";
const user_email = localStorage.getItem("email") || "";
const user_id = localStorage.getItem("user_id") || "";

const Settings = () => {
  const [skillsInput, setSkillsInput] = useState("");
  const [userProfileData, setUserProfileData] = useState<UserProfileData>({
    user_id: "",
    user_name: "",
    user_email: "",
    users_skills: [],
    user_current_company: "",
    total_experience_months: "",
    total_experience_years: "",
    linkedin_url: "",
    github_url: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof UserProfileData, string>>
  >({});
  const [isLoading, setIsLoading] = useState(false);

  const updateProfileData = <k extends keyof UserProfileData>(
    fieldName: k,
    value: UserProfileData[k],
  ) => {
    setUserProfileData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };


  console.log(errors);
  const handleProfileData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const userData = {
        ...userProfileData,
        user_id,
        user_name,
        user_email,
      };
      const result = profileSchema.safeParse(userData);
      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors({
          user_id: fieldErrors.user_id?.[0],
          user_name: fieldErrors.user_name?.[0],
          user_email: fieldErrors.user_email?.[0],
          users_skills: fieldErrors.users_skills?.[0],
          user_current_company: fieldErrors.user_current_company?.[0],
          total_experience_months: fieldErrors.total_experience_months?.[0],
          total_experience_years: fieldErrors.total_experience_years?.[0],
          linkedin_url: fieldErrors.linkedin_url?.[0],
          github_url: fieldErrors.github_url?.[0],
        });
        return;
      }
      setErrors({});
      setIsLoading(true);

      const profilePayload = {
        user_id: result.data.user_id,
        user_name: result.data.user_name,
        user_email: result.data.user_email,
        users_skills: result.data.users_skills,
        user_current_company: result.data.user_current_company,
        total_experience_months: result.data.total_experience_months,
        total_experience_years: result.data.total_experience_years,
        linkedin_url: result.data.linkedin_url,
        github_url: result.data.github_url,
      };
      const response = await profileAPI(profilePayload);
      console.log(response);
      toast.success(GENERIC_MESSAGE.PROFILE_UPDATE_SUCCESS);
    } catch (error) {
      console.log(error);
      toast.error(handleApiError(error, GENERIC_MESSAGE.PROFILE_ERROR_MESSAGE));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Settings
        </h1>

        <p className="mt-1.5 text-sm text-slate-500">
          Manage your profile, professional information, and account.
        </p>
      </div>

      {/* Profile */}
      <section>
        <div className="mb-5 flex justify-between">
          <div>
            <h2 className="text-sm font-medium text-slate-200">Profile</h2>

            <p className="mt-1 text-[12px] text-slate-600">
              Your basic account information.
            </p>

          </div>
          <div className="flex justify-end">
            <Button
              className="
                  h-8
                  rounded-md
                  bg-blue-500
                  px-4
                  text-xs
                  font-medium
                  text-white
                  hover:bg-blue-600"
            >
              {isLoading ? "Updating Profile..." : "Edit Profile"}
            </Button>
          </div>
        </div>

        <div className="space-y-5 border-y border-white/6 py-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-[12px] text-slate-500">Name</Label>

              <Input
                placeholder="Enter"
                value={userProfileData.user_name || user_name}
                onChange={(e) => updateProfileData("user_name", e.target.value)}
                className="
                  h-9
                  border-white/8
                  bg-[#0D151F]
                  text-[13px]
                  text-slate-300
                  placeholder:text-slate-600
                  focus-visible:border-blue-500/50
                  focus-visible:ring-blue-500/15
                "
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[12px] text-slate-500">Email</Label>

              <Input
                type="email"
                defaultValue={user_email}
                disabled={true}
                className="
                  h-9
                  border-white/8
                  bg-[#0D151F]
                  text-[13px]
                  text-slate-300
                  placeholder:text-slate-600
                  focus-visible:border-blue-500/50
                  focus-visible:ring-blue-500/15
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Information */}
      <section>
        <div className="mb-5">
          <h2 className="text-sm font-medium text-slate-200">
            Professional information
          </h2>

          <p className="mt-1 text-[12px] text-slate-600">
            Keep your professional profile up to date.
          </p>
        </div>

        <div className="space-y-6 border-y border-white/6 py-6">
          {/* Company */}
          <div className="max-w-xl space-y-2">
            <Label className="text-[12px] text-slate-500">
              Current company
            </Label>

            <Input
              placeholder="e.g. Google,Amazon..."
              value={userProfileData.user_current_company}
              onChange={(e) =>
                updateProfileData("user_current_company", e.target.value)
              }
              className="
                h-9
                border-white/8
                bg-[#0D151F]
                text-[13px]
                text-slate-300
                placeholder:text-slate-600
                focus-visible:border-blue-500/50
                focus-visible:ring-blue-500/15
              "
            />
          </div>

          {/* Experience */}
          <div>
            <Label className="text-[12px] text-slate-500">Experience</Label>

            <div className="mt-2 flex max-w-xl gap-3">
              <div className="flex flex-1 items-center gap-2">
                <Input
                  type="number"
                  min="0"
                  value={userProfileData.total_experience_years}
                  onChange={(e) =>
                    updateProfileData(
                      "total_experience_years",
                      Math.max(0, Number(e.target.value)),
                    )
                  }
                  placeholder="0"
                  className="
                    h-9
                    border-white/8
                    bg-[#0D151F]
                    text-[13px]
                    text-slate-300
                    placeholder:text-slate-600
                    focus-visible:border-blue-500/50
                    focus-visible:ring-blue-500/15
                  "
                />

                <span className="shrink-0 text-[12px] text-slate-600">
                  years
                </span>
              </div>

              <div className="flex flex-1 items-center gap-2">
                <Input
                  type="number"
                  min="0"
                  max="11"
                  value={userProfileData.total_experience_months}
                  onChange={(e) => {
                    const inputvalue = e.target.value;
                    if (inputvalue === "") {
                      updateProfileData("total_experience_months", inputvalue);
                      return;
                    }
                    const value = Number(e.target.value);
                    if (value >= 0 && value <= 11) {
                      updateProfileData("total_experience_months", value);
                    }
                  }}
                  placeholder="0"
                  className="
                    h-9
                    border-white/8
                    bg-[#0D151F]
                    text-[13px]
                    text-slate-300
                    placeholder:text-slate-600
                    focus-visible:border-blue-500/50
                    focus-visible:ring-blue-500/15
                  "
                />

                <span className="shrink-0 text-[12px] text-slate-600">
                  months
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label className="text-[12px] text-slate-500">Skills</Label>

            <Input
              placeholder="React, TypeScript, JS"
              value={skillsInput}
              onChange={(e) => {
                const value = e.target.value;
                setSkillsInput(value);
                updateProfileData(
                  "users_skills",
                  skillsInput
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean),
                );
              }}
              className="
                h-9
                max-w-xl
                border-white/8
                bg-[#0D151F]
                text-[13px]
                text-slate-300
                placeholder:text-slate-600
                focus-visible:border-blue-500/50
                focus-visible:ring-blue-500/15
              "
            />

            <div className="flex max-w-xl flex-wrap gap-2 pt-1">
              {userProfileData.users_skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="
                    h-6
                    rounded-md
                    border-white/8
                    bg-white/2.5
                    px-2
                    text-[10.5px]
                    font-normal
                    text-slate-400
                  "
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Profiles */}
      <section>
        <div className="mb-5">
          <h2 className="text-sm font-medium text-slate-200">
            Social profiles
          </h2>

          <p className="mt-1 text-[12px] text-slate-600">
            Add links to your developer profiles.
          </p>
        </div>

        <div className="space-y-5 border-y border-white/6 py-6">
          {/* LinkedIn */}
          <div className="max-w-xl space-y-2">
            <Label className="flex items-center gap-2 text-[12px] text-slate-500">
              LinkedIn
            </Label>

            <Input
              type="url"
              placeholder="https://linkedin.com/in/username"
              value={userProfileData.linkedin_url}
              onChange={(e) =>
                updateProfileData("linkedin_url", e.target.value)
              }
              className="
                h-9
                border-white/8
                bg-[#0D151F]
                text-[13px]
                text-slate-300
                placeholder:text-slate-600
                focus-visible:border-blue-500/50
                focus-visible:ring-blue-500/15
              "
            />
          </div>

          {/* GitHub */}
          <div className="max-w-xl space-y-2">
            <Label className="flex items-center gap-2 text-[12px] text-slate-500">
              GitHub
            </Label>

            <Input
              type="url"
              placeholder="https://github.com/username"
              value={userProfileData.github_url}
              onChange={(e) => updateProfileData("github_url", e.target.value)}
              className="
                h-9
                border-white/8
                bg-[#0D151F]
                text-[13px]
                text-slate-300
                placeholder:text-slate-600
                focus-visible:border-blue-500/50
                focus-visible:ring-blue-500/15
              "
            />
          </div>
        </div>
      </section>

      {/* Save */}
      <div className="flex justify-end border-b border-white/6 pb-8">
        <Button
          onClick={handleProfileData}
          className="
            h-8
            rounded-md
            bg-blue-500
            px-4
            text-xs
            font-medium
            text-white
            hover:bg-blue-600
          "
        >
          {isLoading ? "Saving Changes..." : "Save Changes"}
        </Button>
      </div>

      {/* Account */}
      <section>
        <div className="mb-5">
          <h2 className="text-sm font-medium text-slate-200">Account</h2>

          <p className="mt-1 text-[12px] text-slate-600">
            Manage your account security and session.
          </p>
        </div>

        <div className="divide-y divide-white/6 border-y border-white/6">
          <div className="flex items-center justify-between gap-6 py-5">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 size-4 text-slate-600" />

              <div>
                <p className="text-[13px] text-slate-300">Change password</p>

                <p className="mt-1 text-[11.5px] text-slate-600">
                  Update your account password.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="
                h-8
                shrink-0
                rounded-md
                border-white/8
                bg-transparent
                px-3
                text-[11px]
                text-slate-400
                hover:bg-white/5
                hover:text-slate-200
              "
            >
              Change
            </Button>
          </div>

          <div className="flex items-center justify-between gap-6 py-5">
            <div className="flex items-start gap-3">
              <LogOut className="mt-0.5 size-4 text-slate-600" />

              <div>
                <p className="text-[13px] text-slate-300">Sign out</p>

                <p className="mt-1 text-[11.5px] text-slate-600">
                  Sign out from this device.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="
                h-8
                shrink-0
                rounded-md
                border-white/8
                bg-transparent
                px-3
                text-[11px]
                text-slate-400
                hover:bg-white/5
                hover:text-slate-200
              "
            >
              Sign out
            </Button>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="pb-8">
        <div className="mb-5">
          <h2 className="text-sm font-medium text-red-400/80">Danger zone</h2>

          <p className="mt-1 text-[12px] text-slate-600">
            These actions cannot be easily undone.
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 border-y border-red-500/10 py-5">
          <div className="flex items-start gap-3">
            <Trash2 className="mt-0.5 size-4 text-red-400/60" />

            <div>
              <p className="text-[13px] text-slate-300">Delete account</p>

              <p className="mt-1 text-[11.5px] text-slate-600">
                Permanently delete your account and all associated data.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="
              h-8
              shrink-0
              rounded-md
              border-red-500/20
              bg-transparent
              px-3
              text-[11px]
              text-red-400
              hover:bg-red-500/5
              hover:text-red-300
            "
          >
            Delete account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
