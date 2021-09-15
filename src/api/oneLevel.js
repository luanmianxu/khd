import api from "@/utils/request.js"
export default function oneLevel() {
    return api({
        method: 'POST',
        url: '/type/getParentName'
    })
}