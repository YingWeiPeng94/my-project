<template>
    <div class="page-detail">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row class="m-sum-card">
            <el-col :span="17">
                <dl>
                    <dt>
                        <h1>{{productDetail.title}}</h1>
                        <el-rate
                            class="el-rate"
                            v-model="productDetail.score"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}"
                        ></el-rate>
                        <span v-if="productDetail.score>4.5">很好</span>
                        <span v-else-if="productDetail.score>4">好</span>
                        <span v-else-if="productDetail.score>3.5">不错</span>
                        <span v-else-if="productDetail.score>3">一般</span>
                        <span v-else>很差</span>
                        <span>{{productDetail.score}}分</span>
                        <span>{{productDetail.commentNum}}人评论</span>
                        <p>
                            <span
                                v-for="(v, i) in productDetail.tab"
                                :key="v"
                            >{{ v + (i < productDetail.tab.length - 1 ?'|':'')}}</span>
                            <span class="s-item-addr">{{productDetail.address}}</span>
                            <span>
                                <a href="#">
                                    <i class="el-icon-location"></i>
                                    查看地图
                                </a>
                            </span>
                        </p>
                        <p>
                            <span>电话：{{productDetail.phone}}</span>
                        </p>
                        <p>
                            <span>营业时间：{{productDetail.businessTime}}</span>
                        </p>
                    </dt>
                    <div class="support clearfix" style="display:block">
                        <div class="service" style="display:block" v-if="productDetail.service">
                            <i class="icon icon-wifi"></i>
                            <br />
                            <span>提供WiFi</span>
                        </div>
                        <div class="service" style="display:block" v-if="productDetail.Park">
                            <i class="icon icon-park"></i>
                            <br />
                            <span>停车位</span>
                        </div>
                    </div>
                </dl>
            </el-col>
            <el-col :span="7">
                <img class="image" :src="productDetail.imgUrl" alt="图片" />
            </el-col>
        </el-row>
        <el-row class="cash">
            <el-col :span="19">
                <el-row>
                    <div>
                        <h1>商家优惠促销</h1>
                        <div class="cash-content">
                            <ul>
                                <li v-for="(item,index) in productDetail.dealItems" :key="index">
                                    <div class="cash-price">
                                        <p>
                                            <span class="cash-title">{{item.title}}</span>
                                        </p>
                                        <p>
                                            <span class="deal-sales">已售{{item.saleNum}}</span>
                                            <span class="deadline">2019年12月12日</span>
                                        </p>
                                        <p class="cash-p">
                                            <span class="new-price">{{item.price}}</span>
                                            <span class="deal-old-price">门市价{{item.counterPrice}}</span>
                                        </p>
                                    </div>
                                    <div class="operation">
                                        <el-button class="panic-buy-btn" type="warning" plain>立即抢购</el-button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-row>

                <el-row class="commentArea">
                    <div class="total">
                        <div class="sort">
                            <span class="on">质量排序</span>
                            <span>时间排序</span>
                        </div>5226条网友点评
                    </div>
                    <div class="com-cont">
                        <ul class="tags clear">
                            <li class="onSel">
                                分量足
                                (340)
                            </li>
                            <li>
                                菜品不错
                                (336)
                            </li>
                            <li>
                                回头客
                                (234)
                            </li>
                            <li>
                                上菜快
                                (215)
                            </li>
                            <li>
                                海鲜棒
                                (135)
                            </li>
                            <li>
                                交通便利
                                (16)
                            </li>
                            <li>
                                饮品赞
                                (16)
                            </li>
                            <li>
                                朋友聚餐
                                (15)
                            </li>
                            <li>
                                闺蜜聚会
                                (3)
                            </li>
                            <li>
                                家庭聚餐
                                (3)
                            </li>
                        </ul>
                    </div>
                    <div class="sea">
                        <span>
                            <b class="onSel"></b>     
                            只看有图片的评论
                        </span>
                    </div>
                    <comment
                        v-for="(item,index) in productDetail.comment"
                        :key="index"
                        :commentdetail="item"
                    />
                </el-row>
            </el-col>
            <el-col :span="5">
                <maplike/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from "./crumbs.vue";
import Comment from "./comment.vue";
import maplike from "./maplike.vue";
import api from "@/api/index.js"
export default {

    data() {
        return {
            productDetail: {
                // itemId: "2571323",

                // title: "井格重庆火锅（哈西万达店）",

                // imgUrl:
                //     "//p1.meituan.net/bbia/ad95fce97e61e2dc8449e9f8a01480124602119.jpg@302w_171h_1e_1c",

                // type: "food",

                // score: 5,

                // commentNum: 2555,

                // comment: [
                //     {
                //         username: "匿名用户",

                //         image: "https://www.dpfile.com/ugc/user/anonymous.png",

                //         rate: 5,

                //         pics: [
                //             "//p0.meituan.net/shaitu/637c17dbcc9c522d348c11fb6b9f0fad265301.jpg@140w_140h_1e_1c",
                //             "//p0.meituan.net/shaitu/c06dd25f4da8fecaba5601e0ba532fa4420508.jpg@140w_140h_1e_1c"
                //         ],

                //         evalaute: "今天和朋友一起吃饭，本来是很开心的事，可是吃到一半发现锅里有头发，叫服务员半天不理人，在我们一再呼喊下，才过来一个大堂经理，服务态度很差，要求更换锅底菜品，但是我们不是很满意，本来开开心心的事，因为这个头发让我朋友很生气，后来翻看评价，"
                //     }
                // ],

                // tab: ["重庆火锅", "哈西万达"],

                // address: "南岗区中兴大街168号万达广场3层3055",

                // phone: "0451-85717159",

                // businessTime: "周一至周日 09:30-21:00",

                // service: ["提供wifi"],

                // recommend: ["现炸酥肉", "井格毛肚"],

                // avgPrice: 95,

                // dealItems: [
                //     {
                //         title: "100元代金券1张",

                //         price: 28.9,

                //         counterPrice: 100,

                //         saleNum: 3409,

                //         priceType: "元"
                //     }
                // ]
            }
        };
    },
    created(){
        api.detail().then(res => {
            console.log(res.data.data)
            this.productDetail = res.data.data
        })
    },
    components: {
        crumbs,
        Comment,
        maplike,
    }
};
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss";
</style>