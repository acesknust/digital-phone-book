import { Request, Response } from "express";
import { dataSource } from "../dataSource";
import { Report } from "../models/report.model"

export const createReport = async (req: Request, res: Response) => {
    const report = await dataSource.getRepository(Report).create({
        title: req.body.title,
        yearGroup: req.body.yearGroup,
        studentEmail: req.body.email,
        studentName: req.body.name,
        content: req.body.content
    })

    if (!report) { return res.status(400).send({ msg: "Unable to create report." }) }

    await dataSource.getRepository(Report).save(report)

    return res.status(201).send({
        msg: "Report created sucessfully."
    })
}

export const getReports = async (req: Request, res: Response) => {
    let condition = {}

    if (!req.params.id) {
        condition = { where: { id: req.params.id } }
    }

    const reports = await dataSource.getRepository(Report).find(condition)

    return res.status(200).send(reports)
}


export const closeReport = async (req: Request, res: Response) => {
    
}
