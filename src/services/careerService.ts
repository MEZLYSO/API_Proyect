import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../database/database";

class careerService {
  async getCareer() {
    const users = await db.query<RowDataPacket[]>("SELECT * FROM career");
    return users;
  }
}

export default new careerService();
