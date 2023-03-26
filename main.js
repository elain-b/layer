import './style.css'
import javascriptLogo from './javascript.svg'
import Experience from './Experience/Experience.js'
import Experience2 from './Experience/Experience2.js'

// 初期化関数
function init() {
  // 1つ目のcanvasとExperienceインスタンスの作成
  const experienceCanvas = document.querySelector(".experience-canvas");
  const experience = new Experience(experienceCanvas);

  // 2つ目のcanvasとExperience2インスタンスの作成
  const experienceCanvas2 = document.querySelector(".experience-canvas2");
  const experience2 = new Experience2(experienceCanvas2);

  // キャンバスのリサイズ処理をまとめた関数
  function resizeCanvas(canvas, experienceInstance) {
    const container = canvas.parentNode;
    const width = container.clientWidth;
    const height = container.clientHeight;

    canvas.width = width;
    canvas.height = height;

    experienceInstance.onResize();
  }

  // ウィンドウのリサイズイベントにリスナーを追加し、キャンバスのリサイズ処理を呼び出す
  window.addEventListener('resize', () => {
    resizeCanvas(experienceCanvas, experience);
    resizeCanvas(experienceCanvas2, experience2);
  });

  // 初期化時にもキャンバスのリサイズ処理を呼び出す
  resizeCanvas(experienceCanvas, experience);
  resizeCanvas(experienceCanvas2, experience2);
}

// 初期化関数の呼び出し
init();
