import { Request, Response } from "express";
import { dataSource } from "../dataSource";
import { Report } from "../models/report.model";

export const validateReport = async (req: Request, res: Response, next: Function) => {
    const validReport = await dataSource.getRepository(Report).findOne({
        where: { id: req.params.id as any }
    })

    if (!validReport) { return res.status(404).send{ msg: "Report does not exist." } }

    next()
}