<template>
    <div class="about">
        <div class="content prose">
            <h2>Kabala TAROT</h2>
			<p><strong>Tarot</strong> l&agrave; một hệ thống b&agrave;i b&oacute;i to&aacute;n gồm 78 l&aacute; b&agrave;i, được sử dụng để giải m&atilde; tương lai, hiểu r&otilde; bản th&acirc;n v&agrave; kh&aacute;m ph&aacute; những tiềm năng ẩn chứa b&ecirc;n trong mỗi người. Mỗi l&aacute; b&agrave;i trong bộ Tarot mang một h&igrave;nh ảnh, biểu tượng v&agrave; &yacute; nghĩa ri&ecirc;ng, gi&uacute;p người đọc c&oacute; thể đưa ra những dự đo&aacute;n, lời khuy&ecirc;n v&agrave; g&oacute;c nh&igrave;n s&acirc;u sắc về c&aacute;c vấn đề trong cuộc sống.</p>
			<p>Bộ b&agrave;i Tarot được chia th&agrave;nh hai phần ch&iacute;nh:</p>
			<ol>
			<li><strong>Major Arcana (22 l&aacute; b&agrave;i ch&iacute;nh):</strong> Gồm những l&aacute; b&agrave;i mang &yacute; nghĩa lớn lao v&agrave; s&acirc;u sắc, thường đề cập đến những sự kiện, biến cố quan trọng trong cuộc sống.</li>
			<li><strong>Minor Arcana (56 l&aacute; b&agrave;i phụ):</strong> Gồm 4 bộ b&agrave;i nhỏ (Wands, Cups, Swords, Pentacles), mỗi bộ c&oacute; 14 l&aacute; b&agrave;i. C&aacute;c l&aacute; b&agrave;i n&agrave;y đề cập đến những kh&iacute;a cạnh cụ thể, chi tiết hơn về cuộc sống h&agrave;ng ng&agrave;y.</li>
			</ol>
			<p><a href="https://tarot.kabala.vn/">Tarot</a> được sử dụng trong nhiều mục đ&iacute;ch kh&aacute;c nhau:</p>
			<ul>
			<li><strong>Dự đo&aacute;n tương lai:</strong> Cung cấp c&aacute;i nh&igrave;n về những khả năng v&agrave; xu hướng tương lai.</li>
			<li><strong>Tư vấn v&agrave; định hướng:</strong> Gi&uacute;p người hỏi t&igrave;m hiểu v&agrave; giải quyết c&aacute;c vấn đề trong cuộc sống, từ t&igrave;nh cảm, c&ocirc;ng việc đến sức khỏe v&agrave; t&agrave;i ch&iacute;nh.</li>
			<li><strong>Ph&aacute;t triển bản th&acirc;n:</strong> Kh&aacute;m ph&aacute; bản th&acirc;n, nhận diện những điểm mạnh, điểm yếu v&agrave; tiềm năng ẩn chứa.</li>
			</ul>
			<p><u>Tarot</u> kh&ocirc;ng chỉ l&agrave; c&ocirc;ng cụ để dự đo&aacute;n m&agrave; c&ograve;n l&agrave; phương tiện gi&uacute;p con người kết nối với t&acirc;m hồn, trực gi&aacute;c v&agrave; nguồn năng lượng vũ trụ.</p>

            <hr> 
						<p>
				Tìm hiểu thêm về các dự án thuộc Kabala: <a href="https://kabala.vn/all">https://kabala.vn/all</a>
			</p>
            <!--<p>
                Site version: <b>{{ siteVersion }}</b>
            </p>-->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                siteVersion: this.$store.state.siteVersion,
            }
        },
        methods: {

        },
        components: {

        }
    })
</script>

<style lang="scss">
    .prose {
        a {
            color: var(--color-mid);
        }

        hr {
            margin: 40px 0;
            border: none;
            border-bottom: 1px solid var(--color-mid);
        }

        b {
            color: var(--color-mid);
        }
    }

</style>