import { Request, Response } from "express";
import { dataSource } from "../dataSource";
import { Report } from "../models/report.model";
import { ObjectId } from "mongodb";

export const validateReport = async (req: Request, res: Response, next: Function) => {
    const validReports = await dataSource.getRepository(Report).findOne({
        where: { id: new ObjectId(req.params.id) }
    })

    if (!validReports) {
        return res.status(404).send({ msg: "Report does not exist." })

    }

    if (!validReports.isActive) { return res.send(400).send({ msg: "Report has been closed" }) }

    next()
}