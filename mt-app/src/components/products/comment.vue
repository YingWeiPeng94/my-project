<template>
    <div class="comment-item">
        <div class="h">
            <div class="imgBox">
                <img
                    src="//p1.meituan.net/mmc/8fd17014c791cdf393bed473dab116ff3643.png@82w_82h_1e_1c"
                    class="image"
                />
            </div>
        </div>
        <div class="info">
            <div class="name">
                <span>{{commentdetail.username}}</span>
                <img
                    src="//s1.meituan.net/bs/fe-web-meituan/97ed363/img/level-color/level_2.svg"
                    class="user-level"
                />
            </div>
            <div class="date">2019年8月3日</div>
            <div class="comment-info">
                <el-rate
                    class="el-rate"
                    v-model="commentdetail.rate"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template
                ></el-rate>
            </div>
            <div class="comment-content">{{commentdetail.evalaute}}</div>
            <div class="comment-photo">
                    <div
                        class="comment-photo-box"
                        v-for="item in commentdetail.pics"
                        :key="item"
                    >
                        <img :src="item" class="image" alt="图片" />
                    </div>  
            </div>
        </div>

        <div class="user-operations">
            <div class="reply-btn">
                <span class="reply-icon"></span>
                <span class="reply-txt">回应(0)</span>
            </div>
            <div class="like-btn">
                <span class="op-icon"></span>
                <span class="op-txt">赞(0)</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["commentdetail"]
};
</script>

<style lang="scss">
</style>