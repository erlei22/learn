// 核心概念

const state = {
    todos: [{
        text: 'Eat food',
        completed: true
    }, {
        text: 'Exercise',
        completed: false
    }],
    visibilityFilter: 'SHOW_COMPLETED'
}

// actions
const actions = {
    act1: {
        type: 'ADD_TODO',
        text: 'Go to swimming pool'
    },
    act2: {
        type: 'TOGGLE_TODO',
        index: 1
    },
    act3: {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    } else {
        return state;
    }
}

function todos(nowState = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            nowState.concat([{
                text: action.text,
                completed: false
            }]);
            return
        case 'TOGGLE_TODO':
            return nowState.map((todo, index) =>
                action.index === index ? {
                    text: todo.text,
                    completed: !todo.completed
                } :
                todo
            )
        default:
            return nowState;
    }

}

console.log(state.todos)

todos(state.todos, actions.act1)

console.log(state.todos)