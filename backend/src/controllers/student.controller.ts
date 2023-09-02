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
        const student = await dataSource.getRepository(Student).update({referenceNumber:req.params.referenceNumber},
            {
                name: req.body.name,
                nickname:req.body.nickname,
                image:req.body.image,
                quote:req.body.quote
            }
        )


        if (student.affected === 0) {
            return res.status(400).send('Unable to process request');
        }
    
        
        const updatedStudent = await dataSource.getRepository(Student).findOne({ where:{referenceNumber:req.params.referenceNumber}})
    

        return res.status(201).send({
            msg: 'Details taken successfully!'
        });

    }catch(error){
        return res.status(500).send(error);
    }

}