import { reactive } from "vue";

export const store = reactive({
    apiPath: "https://db.ygoprodeck.com/api/v7/",
    endPoint: {
        cardSearch: "cardinfo.php?num=20&offset=0"
    },
    Cards: []
});