<template>
<div>
    <div class="map">
            <img src="@/assets/img/map.jpg" alt />
    </div>
    <div class="map-like">
        
        <div class="guess-like">
            <div class="guess-like-top">
                <div class="label">猜你喜欢</div>
            </div>
            <div class="guess-like-list" v-for="(item, index) in likeList" :key="index">
                <router-link :to="{name: 'productDetail'}">
                    <div class="recommend-card-wrapper">
                        <div class="img-box">
                            <img
                                src="//p1.meituan.net/poi/b0588c60f5885dc1aec50fa82f579bc5178176.jpg@261w_145h_1e_1c"
                                class="image"
                            />
                        </div>
                        <div class="info-box">
                            <div class="info-title">{{item.title}}</div>
                            <div class="score-line">
                                <div class="score">
                                    <p>
                                        <span>
                                            <el-rate
                                                class="el-rate"
                                                v-model="item.score"
                                                disabled
                                                show-score
                                                text-color="#ff9900"
                                                score-template="{value}"
                                            ></el-rate>
                                        </span>

                                    </p>
                                    <span class="commentNum">{{item.commentNum}}个评价</span>
                                </div>
                            </div>
                            <div class="desc-line">
                                <div class="desc">{{item.address}}</div>
                            </div>
                            <div class="bottom-line">
                                <div class="price-box">
                                    <span>
                                        <span class="yuan">￥</span>
                                        <span class="price-number">82.9</span>
                                        <span class="price-desc">起</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            likeList: [
            //     {
            //     itemId: "2571323",

            //     title: "井格重庆火锅（哈西万达店）",

            //     imgUrl: "https://img.meituan.net/xxx",

            //     type: "food",

            //     score: 4,

            //     commentNum: 2555,

            //     comment: [
            //         {
            //             username: "匿名用户",

            //             image: "https://www.dpfile.com/ugc/user/anonymous.png",

            //             rate: 5,

            //             pics: ["http://p0picxxxxx", "http://picxxxxx"],

            //             evalaute: "xxxx"
            //         }
            //     ],

            //     tab: ["重庆火锅", "哈西万达"],

            //     address: "南岗区中兴大街168号万达广场3层3055",

            //     phone: "0451-85717159",

            //     businessTime: "周一至周日 09:30-21:00",

            //     service: ["提供wifi"],

            //     recommend: ["现炸酥肉", "井格毛肚"],

            //     avgPrice: 95,

            //     dealItems: [
            //         {
            //             title: "100元代金券1张",

            //             price: 28.9,

            //             counterPrice: 100,

            //             saleNum: 3409,

            //             priceType: "元"
            //         }
            //     ]
            // }
            ]
        };
    },
    created() {
        api.recommend().then(res => {
            this.likeList = res.data.data.map(item => {
                item.score=+item.score
                return item
            }
            )
            console.log(this.likeList)

        })
    }
};
</script>

<style lang="scss">
@import "@/assets/css/products/maplike.scss";
</style>