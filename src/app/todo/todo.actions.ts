import { Action } from '@ngrx/store';

export const AGREGAR_TODO = "[TODO] Agregar todo";

export const TOGGLE_TODO = "[TODO] Toggle todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle All todo";

export const EDITAR_TODO = "[TODO] Editar todo";
export const ELIMINAR_TODO = "[TODO] Eliminar todo";
export const ELIMINAR_ALL_TODO = "[TODO] Eliminar todos los todo";

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor ( public texto: string ) {  }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor ( public id: number ) {  }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor ( public completado: boolean ) {  }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor ( public id: number, public texto: string ) {  }
}

export class EliminarTodoAction implements Action {
    readonly type = ELIMINAR_TODO;

    constructor ( public id: number ) {  }
}

export class EliminarAllTodoAction implements Action {
    readonly type = ELIMINAR_ALL_TODO;

}

export type Acciones = AgregarTodoAction |
                        ToggleTodoAction |
                        ToggleAllTodoAction |
                        EditarTodoAction |
                        EliminarTodoAction |
                        EliminarAllTodoAction;