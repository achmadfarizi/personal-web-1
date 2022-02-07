let startDate = parseInt(document.getElementById('input-blog-start-date').value)
let EndDate = parseInt(document.getElementById('input-blog-end-date').value)
let x = startDate + "-" + EndDate;

let blog = {
    x
  }

  blogContainer.innerHTML += `
  <div class="blog-detail">
  <div class="blog-detail-container">
    <h1>Dumbways Web App</h1>
    <div class="blog-detail-cntn">
      <div class="container-blogs1">
        <img src="assets/image/blog-img-detail.png" alt="detail" />
      </div>
      <div class="container-blogs2">
        <div class="duration">
          <h3>Duration</h3>
          <p id="demo"><i class="far fa-calendar-alt fa-lg"></i>${x}</p>
          <p><i class="far fa-clock fa-lg"></i>1 month</p>
        </div>
        <div class="tech">
          <h3>technologies</h3>
          <div class="flx">
            <div class="logo1">
              <p><i class="fab fa-react fa-lg"></i>React Js</p>
              <p><i class="fab fa-node-js fa-lg"></i>Node Js</p>
            </div>
            <div class="logo2">
              <p><i class="fab fa-js-square fa-lg"></i>JavaScript</p>
              <p><i class="fab fa-css3-alt fa-lg"></i>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paragraph">
      <p>
        REPUBLIKA.CO.ID, JAKARTA -- Ketimpangan sumber daya manusia (SDM) di
        sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan
        penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Khusus di sektor
        teknologi yang berkembang pesat, menurut Kemendikbudristek, Indonesia
        kekurangan sembilan juta pekerja teknologi hingga tahun 2030. Hal itu
        berarti Indonesia memerlukan sekitar 600 ribu SDM digital yang
        memasuki pasar setiap tahunnya.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita assumenda aperiam architecto doloribus veritatis aspernatur vero quo non fuga, libero dicta debitis similique ipsam sed natus impedit, culpa minus obcaecati reprehenderit officiis consequatur molestiae. Blanditiis hic molestias mollitia vitae et quos possimus accusantium eaque sunt neque, obcaecati qui ut. Neque necessitatibus illo cum quia recusandae molestiae eius officia fugiat eligendi similique commodi at maiores, ipsum magnam nihil? Nulla ut ipsum magnam tempore omnis suscipit commodi eius, molestiae hic dicta? Doloremque, deserunt similique, tenetur molestiae eveniet nemo, sequi voluptas ipsa incidunt facilis necessitatibus dolor! Dicta maxime mollitia placeat dolorem deserunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis magnam, molestias error enim accusantium nihil incidunt impedit natus mollitia quis rem temporibus et quae praesentium reprehenderit tempore at sint, culpa obcaecati ex dolores ipsum soluta officiis. Assumenda reprehenderit labore vero nesciunt aliquid ipsam obcaecati quibusdam culpa. Sit doloremque omnis ab ratione modi perspiciatis officiis commodi exercitationem, ex, iusto voluptas dignissimos doloribus fugit, ea impedit facilis. Totam aliquam atque adipisci consectetur quaerat deleniti eaque at non corporis ducimus sint tempora assumenda eveniet incidunt, quam iusto odio. Quod voluptatum quo saepe eveniet ratione soluta dolores, iure, consectetur sit omnis doloremque exercitationem?
      </p>
    </div>
  </div>
</div>
  `
