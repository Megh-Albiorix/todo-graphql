import Task from "../models/task.model.js";

const taskResolver = {
	Query: {
		getTask: async (_, { id }) => {
			try {
				const task = await Task.findById(id);
				return task;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		getTasks: async () => {
			try {
				const tasks = await Task.find();
				return tasks;
			} catch (error) {
				throw new Error(error.message);
			}
		},
	},
	Mutation: {
		createTask: async (_, { input }) => {
			try {
				const { title, description } = input;
				if (!title || !description) {
					throw new Error("Title and description are required");
				}
				const task = await Task.create(input);
				return task;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		deleteTask: async (_, { id }) => {
			try {
				const task = await Task.findByIdAndDelete(id);
				return task;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		updateTask: async (_, { id, input }) => {
			try {
				const task = await Task.findByIdAndUpdate(id, input, { new: true });
				return task;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		toggleTaskDone: async (_, { id }) => {
			try {
				const task = await Task.findById(id);
				task.done = !task.done;
				await task.save();
				return task;
			} catch (error) {
				throw new Error(error.message);
			}
		},
	},
};

export default taskResolver;
