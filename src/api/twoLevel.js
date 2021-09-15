import api from "@/utils/request.js"
export default function twoLevel(oneval) {
    return api({
        method: 'POST',
        url: '/wares/getSecond',
        data: { 'parent_name': oneval }
    })
}