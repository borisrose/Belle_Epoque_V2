import sealed from "../../utils/decorators/class/sealed";
import CustomLocalStorageService from "../custom-localstorage-service/custom-localstorage-service";
import UsersService from "../users-service/users-service";

@sealed
export default class AuthService {
  usersService: UsersService;
  customLocalStorageService: CustomLocalStorageService;

  constructor() {
    this.usersService = new UsersService();
    this.customLocalStorageService = new CustomLocalStorageService();
  }

  async log(
    isLoggingIn: boolean,
    credentials: { email: string; password: string }
  ) {
    if (isLoggingIn) {
      const result = await this.usersService.getUserByEmail(credentials.email);
      if (typeof result !== "string") {
        if (result.password == credentials.password) {
          this.customLocalStorageService.setSpecificItem("token", {
            username: credentials.email
          });
        } else {
          return "error";
        }
      } else {
        return result;
      }
    } else {
      const result = await this.usersService.getUserByEmail(credentials.email);
      if (typeof result !== "string") {
        if (result.password == credentials.password) {
          this.customLocalStorageService.setSpecificItem("token", {
            username: credentials.email
          });
          return "already";
        } else {
          return "error";
        }
      } else {
        this.customLocalStorageService.setSpecificItem("new-user", {
          firstname: credentials.email.split("@")[0],
          lastname: credentials.email.split("@")[1],
          url: "https://cdn.pixabay.com/photo/2024/03/13/04/49/ai-generated-8630058_1280.jpg",
          email: credentials.email,
          password: "need to know policy"
        });
        this.customLocalStorageService.setSpecificItem("token", {
          username: credentials.email
        });
      }
    }
  }

  logout() {
    const user = this.customLocalStorageService.getSpecificItem("new-user");
    if (typeof user !== "string") {
      this.customLocalStorageService.removeSpecificItem("new-user");
      this.customLocalStorageService.removeSpecificItem("token");
    } else {
      this.customLocalStorageService.removeSpecificItem("token");
    }
    return "done";
  }
}
