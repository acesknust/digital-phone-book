import { Request, Response } from "express";
import { dataSource } from "../dataSource";
import { Report } from "../models/report.model"

export const createReport = async (req: Request, res: Response) => {
    const report = await dataSource.getRepository(Report).create({
        
    })
}

export const getReports = async (req: Request, res: Response) => {

}

