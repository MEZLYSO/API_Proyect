import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../database/database";
import { User } from "../models/user";
class userService {
  async getUsers() {
    const users = await db.query<RowDataPacket[]>("SELECT * FROM users");
    return users as User[];
  }

  async getUser(id: number) {
    const user = await db.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE id = ?",
      id,
    );
    if (Array.isArray(user) && user.length > 0) {
      return user[0] as User;
    }
    return null;
  }

  async postUser(data: User) {
    const result = await db.query<ResultSetHeader>(
      "INSERT INTO users (name, surname1, surname2, rfid) VALUES ?",
      [[[data.name, data.surname1, data.surname2, data.rfid]]],
    );
    if (result.insertId) {
      return await this.getUser(result.insertId);
    }
    return null;
  }

  async deleteUser(id: number): Promise<Boolean> {
    const user = await db.query<ResultSetHeader>(
      "DELETE FROM users WHERE id = ?",
      id,
    );
    return user.affectedRows > 0;
  }
}

export default new userService();
