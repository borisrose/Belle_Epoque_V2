import sealed from "../../utils/decorators/class/sealed";
import { onNavigateType } from "../../models/types/on-navigate.type";

@sealed
export default class LogContainer {
  onNavigate: onNavigateType;
  isLoggingIn: boolean;

  constructor(onNavigate: onNavigateType, isLoggingIn: boolean) {
    this.isLoggingIn = isLoggingIn;
    this.onNavigate = onNavigate;

    const form = document.getElementById("log-form") as HTMLFormElement;

    form.addEventListener("submit", e => this.onSubmit(e));
  }

  onSubmit(e: any) {
    e.preventDefault();
    const formData = {} as any;

    const emailInputValue = (
      document.getElementById("email") as HTMLInputElement
    ).value;

    const passwordInputValue = (
      document.getElementById("password") as HTMLInputElement
    ).value;

    if (!emailInputValue || !passwordInputValue) {
      return;
    }

    formData.email = emailInputValue;
    formData.password = passwordInputValue;

    if (!this.isLoggingIn) {
      const confirmedPasswordInputValue = (
        document.getElementById("confirmed-password") as HTMLInputElement
      ).value;
      if (!confirmedPasswordInputValue) {
        return;
      }
      formData.confirmedPassword = confirmedPasswordInputValue;
    }

    console.log(formData);
  }
}
