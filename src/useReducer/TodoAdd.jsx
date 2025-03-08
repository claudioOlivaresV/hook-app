import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                value={description}
                onChange={onInputChange}
                placeholder="Agregar tarea"
                className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-2">Agregar</button>
        </form>
    );
};
