<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd 
      v-for="(item, index) in nav.list" 
      :key="index" :class="{active: kind == item.tab}" 
      :data-type="item.tab"
      >{{item.text}}</dd>
      <!-- <dd :class="{active: kind == 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active: kind == 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active: kind == 'movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active: kind == 'travel'}" data-type="travel">品质出游</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div> -->
            <!-- <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}</span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        {
          image:
            "//p0.meituan.net/msmerchant/93ce7074b3227ecedc605bf5339fef4a156721.jpg@460w_260h_1e_1c",
          title: "Miss Jane烘焙定制（甬港店）",
          sub_title: "蛋糕2选1,约8英寸，圆形",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            units: '人均',
          },
          rentNum: 3,
          address: "鄞州区"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/93ce7074b3227ecedc605bf5339fef4a156721.jpg@460w_260h_1e_1c",
          title: "Miss Jane烘焙定制（甬港店）",
          sub_title: "蛋糕2选1,约8英寸，圆形",
          price_info: {
            current_price: 218,
            old_price: 35
          },
          rentNum: 2,
          address: "鄞州区"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/93ce7074b3227ecedc605bf5339fef4a156721.jpg@460w_260h_1e_1c",
          title: "Miss Jane烘焙定制（甬港店）",
          sub_title: "蛋糕2选1,约8英寸，圆形",
          price_info: {
            current_price: 218,
            old_price: 35
          },
          address: "鄞州区"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/93ce7074b3227ecedc605bf5339fef4a156721.jpg@460w_260h_1e_1c",
          title: "Miss Jane烘焙定制（甬港店）",
          sub_title: "蛋糕2选1,约8英寸，圆形",
          price_info: {
            current_price: 218,
            old_price: 35
          },
          address: "鄞州区"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/93ce7074b3227ecedc605bf5339fef4a156721.jpg@460w_260h_1e_1c",
          title: "Miss Jane烘焙定制（甬港店）",
          sub_title: "蛋糕2选1,约8英寸，圆形",
          price_info: {
            current_price: 218,
            old_price: 35
          },
          address: "鄞州区"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/93ce7074b3227ecedc605bf5339fef4a156721.jpg@460w_260h_1e_1c",
          title: "Miss Jane烘焙定制（甬港店）",
          sub_title: "蛋糕2选1,约8英寸，圆形",
          price_info: {
            current_price: 218,
            old_price: 35
          },
          address: "鄞州区"
        }
      ]
    };
  },
  props:['nav'],
  created () {
    api.resultsByKeywords().then(res=>{
      // console.log(res)
      this.resultsData = res.data.data
    })
  },
  methods: {
    over (e) {
        console.log(e.target.getAttribute('data-type'))
        let dom = e.target;
        let tagName = dom.tagName.toLowerCase();
        if (tagName != 'dd'){
            // 编程小技巧碰到其他的时候就往下执行
            return false;
        }
        this.kind = dom.getAttribute('data-type')
        //下面写动态获取数据，ajax请求
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>