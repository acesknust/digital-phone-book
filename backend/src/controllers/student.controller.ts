import { Response, Request } from "express";
import { dataSource } from '../dataSource'
import { Student } from "../models/student.model";


export const createStudent = async (req: Request, res: Response) => {
    try{
        const student = await dataSource.getRepository(Student).create({
            referenceNumber: req.body.referenceNumber,
            year: req.body.year
        })

        if(!student) return res.status(400).send('Unable to create student')

        await dataSource.getRepository(Student).save(student)
        return res.status(201).send({
            msg: "Student created successfully!"
        })

    }catch(error){
        return res.status(500).send(error);
    }
}


export const getAllStudentData = async (req: Request, res: Response) => {
    try{
        const student = await dataSource.getRepository(Student).find()
        if(!student) return res.status(404).send('No student found')
        return res.status(200).send(student)
    }catch(error){
        return res.status(500).send(error);
    }
}


export const getAllStudentDataInYear = async (req: Request, res: Response) => {
    try{
        const student = await dataSource.getRepository(Student).find({where: {year: req.params.year}})
        if(!student) return res.status(404).send('No student found')
        return res.status(200).send(student)
    }catch(error){
        // console.log(error)
        return res.status(500).send(error);
    }
}

export const updateStudentDataHavingTheReferenceNumber = async (req: Request, res: Response) => {
    try{

    }catch(error){}

}