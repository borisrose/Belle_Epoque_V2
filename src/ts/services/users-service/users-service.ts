import sealed from "../../utils/decorators/class/sealed";

@sealed
export default class UsersService {
  constructor() {}

  async getUsers(): Promise<any[] | undefined> {
    try {
      const result = await fetch("/data/users.json");
      const users = await result.json();
      return users;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserByEmail(email: string): Promise<any> {
    return this.getUsers()
      .then(users => {
        const user = users.find(u => u.email == email);
        if (!user) {
        }
        return user;
      })
      .catch(err => "error");
  }
}
