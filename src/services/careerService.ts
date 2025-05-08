import { ResultSetHeader, RowDataPacket } from "mysql2";
import db from "../database/database";
import { career } from "../models/career";

class careerService {
  async getCareers() {
    const careers = await db.query<RowDataPacket[]>("SELECT * FROM career");
    return careers;
  }

  async getCareer(id: number) {
    const career = await db.query<RowDataPacket[]>(
      "SELECT * FROM career WHERE id=?",
      id,
    );
    if (Array.isArray(career) && career.length > 0) {
      return career[0];
    }
    return null;
  }

  async postCareer(data: career) {
    const result = await db.query<ResultSetHeader>(
      "INSERT INTO career (rfid,time) VALUES ?",
      [[[data.rfid, data.time]]],
    );
    if (result.insertId) {
      return await this.getCareer(result.insertId);
    }
    return null;
  }
}

export default new careerService();
