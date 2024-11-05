
import Task from "../models/user.model.js"

export const getTasks = async (req, res) => {
    const task = await Task.find()
    res.json(
        { task }
    )
}
export const createTask = async (req, res) => {
    const { tittle, description, date } = req.body

    const newTask = new Task({ tittle, description, date, user: req.user.id })
    const savedTask = await newTask.save(
        res.json(savedTask)
    )
}
export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json({ message: "Task not Found" })
    res.json(task)
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({ message: "Task not Found" })
    return res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(req.params.id, req.body, { new: true })
    if (!task) return res.status(404).json({ message: "Task not Found" })
    res.json(task)
}