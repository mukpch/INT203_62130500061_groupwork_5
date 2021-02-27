const app = Vue.createApp({
    data() {
        return {
            tasks: [
                {
                    no: 0,
                    title: 'Shiba Inu',
                    imgUrl: './images/Shiba.jpg',
                    done: false
                },
                {
                    no: 1,
                    title: 'Pug',
                    imgUrl: './images/Pug.jpg',
                    done: false
                },
                {
                    no: 2,
                    title: 'Pomeranian',
                    imgUrl: './images/Pomeranian.jpg',
                    done: false
                },



                {
                    no: 3,
                    title: 'Chihuahua',
                    imgUrl: './images/Chihuahua.jpg',
                    done: false
                },
                {
                    no: 4,
                    title: 'Chow Chow',
                    imgUrl: './images/ChowChow.png',
                    done: false
                },
                {
                    no: 5,
                    title: 'Shih Tzu',
                    imgUrl: './images/ShihTzu.jpg',
                    done: false
                },



                {
                    no: 6,
                    title: 'Poodle',
                    imgUrl: './images/Poodle.jpg',
                    done: false
                },
                {
                    no: 7,
                    title: 'Golden Retriever',
                    imgUrl: './images/GoldenRetriever.jpeg',
                    done: false
                },
                {
                    no: 8,
                    title: 'Siberian Husky',
                    imgUrl: './images/SiberianHusky.jpg',
                    done: false
                },



                {
                    no: 9,
                    title: 'Corgi',
                    imgUrl: './images/Corgi.jpg',
                    done: false
                },
                {
                    no: 10,
                    title: 'Beagle',
                    imgUrl: './images/Beagle.jpg',
                    done: false
                },
                {
                    no: 11,
                    title: 'Thai Bangkaew',
                    imgUrl: './images/ThaiBangkaew.jpg',
                    done: false
                },




                {
                    no: 12,
                    title: 'Bulldog',
                    imgUrl: './images/Bulldog.jpg',
                    done: false
                },
                {
                    no: 13,
                    title: 'Labrador',
                    imgUrl: './images/Labrador.jpeg',
                    done: false
                },
                {
                    no: 14,
                    title: 'American Pit Bull Terrier',
                    imgUrl: './images/PitBull.jpg',
                    done: false
                },



            ],
            form: {
                text: "",
                search: false,
            },
            hasView: false,
            viewImg: '',
        };
    },
    methods: {
        like(task) {
            this.tasks[task.no].done = !this.tasks[task.no].done;
        },
        toggleView(task) {
            console.log(task);
            this.viewImg = this.tasks[task].imgUrl;
            this.hasView = true;
        },
        close() {
            this.hasView = false;
        },
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    },
    computed: {
        countUndone() {
            return this.tasks.filter((t) => t.done).length;
        },
        searching() {
            return this.tasks.filter((member) => {
                return member.title.toLowerCase().includes(this.form.text.toLowerCase());
            });
        },
    },
});
