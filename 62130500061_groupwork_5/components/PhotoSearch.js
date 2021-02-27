app.component("photo-search", {
    props: {
        form: Object,
    },
    template:
        /*html*/
        `
        <div class="flex justify-end pt-4 text-red-800">
        <span :class="{'hidden' : form.search }"><i class="fas fa-search fa-2x" @click="search" ></i></span>
            <span :class="{'hidden' : !form.search}">
                <input type="text" class="py-2 px-4 bg-white rounded flex-1 border-b-2 border-red-400"
                    placeholder="Please enter text for searching photos" v-model="form.text">
                <button class="px-4 py-2 mx-2 text-white bg-red-700 rounded-full" @click="cancel">Cancel</button>
            </span>
    </div>
   `,
    methods: {
        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
    }
});