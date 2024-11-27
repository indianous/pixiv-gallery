import sqlite from "sqlite3";
import { env } from "../utils/env";

export class Database {
  private db;
  constructor() {
    this.db = new sqlite.Database(env.DATABASE_FILENAME);
  }

  async createTables(sql: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.exec(sql, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async insertData(sql: string, params: string[] = []): Promise<void> {
    if (params && params.length > 0) {
      return new Promise((resolve, reject) => {
        this.db.run(sql, params, (err) => {
          if (err) reject(err);
          resolve();
        });
      });
    }
    return new Promise((resolve, reject) => {
      this.db.exec(sql, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async updateData(sql: string, params: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async deleteData(sql: string, identifier: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, [identifier, false], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async getAllData(sql: string, params: string[] = []): Promise<any> {
    if (params && params.length > 0) {
      return new Promise((resolve, reject) => {
        this.db.all(sql, params, (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        });
      });
    }
    return new Promise((resolve, reject) => {
      this.db.all(sql, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  async getFirstData(sql: string, params: string[] = []): Promise<any> {
    if (params && params.length > 0) {
      return new Promise((resolve, reject) => {
        this.db.get(sql, params, (err, row) => {
          if (err) reject(err);
          resolve(row);
        });
      });
    }
    return new Promise((resolve, reject) => {
      this.db.get(sql, (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  close() {
    this.db.close();
  }
}
