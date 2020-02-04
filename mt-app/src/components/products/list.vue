<template>
    <div class="m-products-list">
        <ul>
            <li
                v-for="item in nav"
                :key="item.key"
                :class="{'s-nav-active':item.active}"            
            >
            {{item.name}}
            </li>
        </ul>
        <el-row>
            <item v-for="(item, index) in productList"
            :key="index"
            :meta="item"
            />

            
        </el-row>
    </div>
</template>

<script>
import Item from './item.vue'
import api from '@/api/index.js'

export default {
    props:["meta"],
    data() {
        return {
            nav: [
                {
                    key: "s-default",
                    name: "智能排血",
                    active: true
                },
                {
                    key: "s-price",
                    name: "价格最低",
                    active: false
                },
                {
                    key: "s-score",
                    name: "人气最高",
                    active: false
                },
                {
                    key: "s-comment",
                    name: "评价最高",
                    active: false
                }
            ],
            productList:[
            //     {
            //         itemId:123456,
            //         title: "井格重庆火锅（哈西万达店）",
            //         image: "//p1.meituan.net/msmerchant/cbcefd519506ee68b52b107f8db422e4781254.jpg@330w_187h_1e_1c",
            //         type: "food",
            //         score: 5,
            //         commentNum: 2555,
            //         comment: [
            //             {
            //                 username: "匿名用户",
            //                 rate: 5,
            //                 evalaute: "好吃"
            //             }
            //         ],
            //         tab: ["重庆火锅", "哈西万达"],
            //         address: "南岗区中兴大街168号万达广场3层3055",
            //         phone: "0451-85717159",
            //         businessTime: "周一至周日 09:30-21:00",
            //         service: ["提供wifi"],
            //         recommend: ["现炸酥肉", "井格毛肚"],
            //         avgPrice: 95,
            //         dealItems: [
            //             {
            //                 title: "100元代金券1张",
            //                 price: 28.9,
            //                 counterPrice: 100,
            //                 saleNum: 3409,
            //                 priceType: "元"
            //             }
            //     ]
            //     }
            ]
        }
    },
    created() {
        api.getProductsList().then(res => {
            // console.log(res)
            this.productList = res.data.data
        })
    },
    components:{
        Item
    },
};
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>