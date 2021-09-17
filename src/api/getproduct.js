// 获取一级分类所有商品
import api from "@/utils/request.js"
export default function getproduct(option,page) {
    return api({
        method: 'POST',
        url: '/type/getproduct',
        data:{parent_name:option,page:page}
    })
}