new Vue({
    el: '#app',
    data: {
        new_task: {
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'Задача №1',
                desc: 'Прочитать книгу'
            },
            {
                title: 'Задача №2',
                desc: 'Посетить лекцию'
            }
        ],
        localTile: '',
        localdesk: ''
    },
    methods: {
        add_task(){
            if (this.new_task.title !== '') {
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                console.log(this.tasks);
                this.saveTask();
                this.new_task.title = '';
                this.new_task.desc = '';
            }
        },
        saveTask(){
            const parsedTitle = JSON.stringify(this.new_task.title);
            localStorage.setItem('tisks', parsedTitle);
            const parsedDesk = JSON.stringify(this.new_task.desc);
            localStorage.setItem('tasks', parsedDesk);
        },
        delete_task(id){
            this.tasks.splice(id, 1)
        }
    },
    mounted(){
        if (localStorage.getItem('tisks')) {
            this.tasks.push({
                title: JSON.parse(localStorage.getItem('tisks')),
                desc: JSON.parse(localStorage.getItem('tasks'))
            })
        }
    }
})

