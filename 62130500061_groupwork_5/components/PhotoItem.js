app.component("photo-items", {
    props: {
        task: Object,
    },
    template:
        /*html*/
        `
        <article class="my-8 py-4 px-4 border rounded-sm border-red-200 shadow-md">
           
                <div class="h-56">
                    <img class="w-96 h-full" :src="task.imgUrl" alt="image" @click="clickModal(task.no)">
                </div>

                <div class="pt-5 pb-2">
                    
                    <span v-show="!task.done"
                    class="text-red-800 transition duration-500 far fa-2x fa-heart hover:text-red-500 pl-2"
                    @click="clickLike(task)"></span>

                    <span v-show="task.done " class="text-red-500 transition duration-500 fas fa-2x fa-heart pl-2"
                    @click="clickLike(task)"></span>

                    <span class="text-xl font-bold text-red-800 pl-4">
                            {{task.title}}
                        </span>
                    
                  </div>
            </div>     
        </article>
   `,
    methods: {
        clickLike(task) {
            this.$emit("when-like",task);
        },
        clickModal(task) {
            this.$emit("when-toggleview",task);
        },
    }
});