"use client";

import { FormEvent, useState } from "react";

const garmentSolutions = [
  {
    code: "SHELL / 01",
    title: "全天候外壳",
    copy: "围绕风、雨与湿热变化进行面料、膜层和结构组合，形成适合通勤与户外场景的外层方案。",
    tags: ["防水透湿方向", "轻量结构", "场景化版型"],
    image:
      "https://images.pexels.com/photos/19404760/pexels-photo-19404760.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
  {
    code: "THERMAL / 02",
    title: "轻暖中间层",
    copy: "根据活动强度、环境温度与穿着时长匹配保暖材料，让温控能力进入可拆、可叠穿的服装系统。",
    tags: ["PI 材料方向", "模块叠穿", "长时间舒适"],
    image:
      "https://images.pexels.com/photos/6778717/pexels-photo-6778717.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    code: "SYSTEM / 03",
    title: "组合穿着系统",
    copy: "把外壳、中间层与细节组件作为一个系统开发，支持不同季节、气候和团队需求的组合使用。",
    tags: ["多层组合", "样品共创", "团体应用"],
    image:
      "https://images.pexels.com/photos/7625031/pexels-photo-7625031.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
] as const;

const materials = [
  {
    key: "nano",
    short: "NANO",
    title: "功能膜材料",
    thesis: "负责水与气的平衡",
    copy: "面向防水、透湿与轻量层压需求，参与外层面料和复合结构的选择与打样。",
    forms: "膜材、复合面料、层压结构",
    use: "功能外套、户外装备、轻量防护",
    color: "cyan",
  },
  {
    key: "pi",
    short: "PI",
    title: "聚酰亚胺材料",
    thesis: "负责温度与穿着体验",
    copy: "面向轻量保暖、温控与特定防护需求，为内层、中间层及相关纺织品提供材料选项。",
    forms: "纤维、纱线、织物、填充与复合层",
    use: "保暖服装、贴身层、功能纺织品",
    color: "amber",
  },
  {
    key: "basalt",
    short: "BASALT",
    title: "玄武岩纤维材料",
    thesis: "负责强度与工程耐久",
    copy: "面向复合增强、耐候耐腐蚀及结构应用。它不被硬塞进日常服装，而是在装备与工程方案中发挥价值。",
    forms: "原丝、织物、毡、预浸料、复合制品",
    use: "装备部件、交通、建筑、市政与工业应用",
    color: "stone",
  },
] as const;

const process = [
  ["01", "讲清需求", "先确认使用者、环境、预算、交付数量和必须解决的问题。"],
  ["02", "组合材料", "从材料池中选择适合的纤维、膜层、织物与结构，不为材料而材料。"],
  ["03", "形成样品", "把参数变成可穿、可触摸、可讨论的样品，快速验证方向。"],
  ["04", "检测协同", "按项目要求整理规格、检测资料与送检协同，让沟通有共同依据。"],
  ["05", "生产交付", "连接原料、制造与项目跟进，推动方案从样品走向实际应用。"],
] as const;

const industries = [
  ["装备与防护", "面向耐候、轻量、隔热和结构增强需求，提供材料与部件组合建议。"],
  ["交通与先进制造", "围绕轻量化、耐久性和复杂环境使用条件开展材料选型。"],
  ["建筑与市政", "覆盖复合板材、管道、格栅及户外设施等工程应用方向。"],
  ["新能源", "围绕绝缘、阻隔、耐候与结构支撑需求匹配材料形态。"],
  ["海洋与低空场景", "针对腐蚀、重量、维护和长期暴露环境梳理应用方案。"],
  ["医疗与运动", "探索轻量支撑、舒适接触及功能复合材料的产品化可能。"],
] as const;

export default function Home() {
  const [activeMaterial, setActiveMaterial] = useState<(typeof materials)[number]["key"]>("nano");
  const [sent, setSent] = useState(false);
  const material = materials.find((item) => item.key === activeMaterial) ?? materials[0];

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="看人之大首页">
          <span className="brand-mark">看</span>
          <span className="brand-copy">
            <strong>看人之大科技研究院</strong>
            <small>KANRENZHIDA TECHNOLOGY INSTITUTE</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#clothing">服装方案</a>
          <a href="#materials">材料能力</a>
          <a href="#method">解决方法</a>
          <a href="#industries">其他应用</a>
          <a href="#company">关于我们</a>
        </nav>
        <a className="header-cta" href="#contact">提交应用需求</a>
        <details className="mobile-nav">
          <summary aria-label="打开导航">菜单</summary>
          <nav aria-label="移动端导航">
            <a href="#clothing">服装方案</a>
            <a href="#materials">材料能力</a>
            <a href="#method">解决方法</a>
            <a href="#industries">其他应用</a>
            <a href="#contact">联系我们</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.pexels.com/photos/19404760/pexels-photo-19404760.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt=""
          />
          <div className="hero-shade" />
          <div className="material-loom">
            <i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow light">多材料协同 · 功能服装第一落地</p>
            <h1 id="hero-title">先把材料，<br />做成一件真正能用的衣服。</h1>
            <p className="hero-lede">
              从防水透湿、轻量保暖到结构增强，我们不把材料摆成目录，而是围绕真实穿着场景完成选材、组合、打样与交付。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#clothing">查看服装解决方案</a>
              <a className="button button-ghost" href="#contact">提交应用需求</a>
            </div>
          </div>
          <aside className="hero-card">
            <p>衣服是第一张样板</p>
            <h2>材料能力，最终要变成客户能使用的产品。</h2>
            <div className="hero-materials">
              <span><b>NANO</b> 水与气</span>
              <span><b>PI</b> 温与轻</span>
              <span><b>BASALT</b> 强与久</span>
            </div>
          </aside>
        </div>
        <div className="hero-caption shell">
          <span>01 / CLOTHING FIRST</span>
          <p>复杂气候 · 户外活动 · 日常通勤 · 团体应用</p>
        </div>
      </section>

      <section className="thesis section-shell">
        <p className="section-label">我们的定位</p>
        <div>
          <h2>不是卖一块材料。<br /><em>是解决一个具体问题。</em></h2>
          <p>看人之大聚合多种材料与产业协同资源，以功能服装为首个重点入口，为客户提供从需求梳理到样品与交付的应用解决方案。</p>
        </div>
      </section>

      <section className="clothing-section" id="clothing">
        <div className="section-shell">
          <div className="section-heading split">
            <div>
              <p className="section-label">服装解决方案 / 当前主推</p>
              <h2>把不同材料，组织成一套穿着系统。</h2>
            </div>
            <p>先从客户最容易感知的服装开始：不是堆叠参数，而是说明每一层为什么存在、适合什么环境、如何组合使用。</p>
          </div>
          <div className="garment-grid">
            {garmentSolutions.map((item) => (
              <article className="garment-card" key={item.code}>
                <img src={item.image} alt={`${item.title}视觉示意`} />
                <div className="garment-overlay" />
                <div className="garment-copy">
                  <span>{item.code}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div>{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="clothing-cta">
            <p><strong>有现成服装方向，也接受从需求开始共同开发。</strong><br />告诉我们使用环境、人数与时间计划，我们先给出材料组合思路。</p>
            <a className="text-link" href="#contact">获取服装方案建议 <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="materials-section" id="materials">
        <div className="section-shell">
          <div className="section-heading split">
            <div>
              <p className="section-label">材料不是陈列，是角色分工</p>
              <h2>同一个需求，往往需要多种材料共同完成。</h2>
            </div>
            <p>PI、功能膜与玄武岩纤维是当前重点入口，不是全部能力，也不会被勉强放进同一件产品。</p>
          </div>

          <div className="material-console">
            <div className="material-tabs" role="tablist" aria-label="材料选择">
              {materials.map((item) => (
                <button
                  className={activeMaterial === item.key ? "active" : ""}
                  key={item.key}
                  onClick={() => setActiveMaterial(item.key)}
                  role="tab"
                  aria-selected={activeMaterial === item.key}
                  type="button"
                >
                  <span>{item.short}</span>
                  <strong>{item.title}</strong>
                  <small>{item.thesis}</small>
                </button>
              ))}
            </div>
            <article className={`material-detail ${material.color}`} aria-live="polite">
              <div className="material-orbit" aria-hidden="true"><i /><i /><i /></div>
              <div className="material-detail-copy">
                <p className="eyebrow">{material.short} / MATERIAL ROLE</p>
                <h3>{material.thesis}</h3>
                <p>{material.copy}</p>
                <dl>
                  <div><dt>可提供形态</dt><dd>{material.forms}</dd></div>
                  <div><dt>优先应用</dt><dd>{material.use}</dd></div>
                </dl>
                <a className="text-link" href="#contact">咨询这种材料的应用方式 <span>→</span></a>
              </div>
              <span className="material-word">{material.short}</span>
            </article>
          </div>
          <p className="evidence-note">具体性能、规格与适用标准以项目资料、样品确认和检测文件为准。</p>
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="section-shell method-grid">
          <div className="method-intro">
            <p className="section-label">从材料到解决方案</p>
            <h2>五个动作，把技术变成交付。</h2>
            <p>宣传册中的产业链能力被重新组织成客户能理解、项目能推进的服务流程。</p>
          </div>
          <ol className="process-list">
            {process.map(([index, title, copy]) => (
              <li key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="section-shell">
          <div className="industry-title">
            <p className="section-label">衣服之外 / 能力延伸</p>
            <h2>先推服装，<br />但材料能力不止于服装。</h2>
            <p>其他行业不抢首页主线，只负责说明：同一套选材、组合、样品与检测协同方法，也可以服务更多真实工程场景。</p>
          </div>
          <div className="industry-grid">
            {industries.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact" aria-label={`咨询${title}方案`}>→</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="company-image">
          <img
            src="https://images.pexels.com/photos/6778713/pexels-photo-6778713.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="功能服装户外应用视觉示意"
          />
        </div>
        <div className="company-copy">
          <p className="section-label">深圳市看人之大科技有限公司</p>
          <h2>我们不只提供材料，<br />也负责让项目继续往前走。</h2>
          <p>围绕客户项目需求，提供材料选型、样品对接、规格沟通、资料整理、检测协同、供应协调和交付跟进。</p>
          <ul>
            <li><span>深圳主体</span><b>清晰的项目沟通与业务响应</b></li>
            <li><span>东莞服务</span><b>样品、供应与交付协同</b></li>
            <li><span>开放合作</span><b>连接材料、制造、检测与应用伙伴</b></li>
          </ul>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">START WITH A REAL PROBLEM</p>
            <h2>告诉我们，<br />你想做什么衣服。</h2>
            <p>如果不是服装，也可以直接描述应用场景。我们会从材料选择和样品方案开始沟通。</p>
            <div className="contact-details">
              <strong>深圳市看人之大科技有限公司</strong>
              <a href="tel:+8613712670275">137 1267 0275</a>
              <a href="tel:+8613549376386">135 4937 6386</a>
              <a href="mailto:540148510@qq.com">540148510@qq.com</a>
              <p>广东省东莞市东城街道莞长路东城段143号6栋兴华智慧城1101、1102室</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <label>姓名<input name="name" required placeholder="怎么称呼您" /></label>
            <label>公司 / 机构<input name="company" placeholder="您的公司或机构" /></label>
            <label>联系电话<input name="phone" required inputMode="tel" placeholder="方便联系的号码" /></label>
            <label>需求方向
              <select name="direction" defaultValue="clothing">
                <option value="clothing">功能服装解决方案</option>
                <option value="materials">材料与样品</option>
                <option value="industry">其他行业应用</option>
                <option value="cooperation">供应与合作</option>
              </select>
            </label>
            <label className="full">需要解决的问题<textarea name="message" rows={5} placeholder="使用环境、数量、时间计划，以及最需要解决的问题" /></label>
            <button className="button button-primary full" type="submit">{sent ? "需求已记录，请通过电话或邮箱联系我们" : "提交应用需求"}</button>
            <small className="full">当前为前端需求表单演示，不会自动发送或保存信息。</small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand"><span className="brand-mark">看</span><strong>看人之大科技研究院</strong><p>多材料功能服装与产业解决方案</p></div>
          <div><b>当前主推</b><a href="#clothing">功能服装方案</a><a href="#materials">材料能力</a><a href="#method">解决方法</a></div>
          <div><b>项目联系</b><a href="tel:+8613712670275">137 1267 0275</a><a href="mailto:540148510@qq.com">540148510@qq.com</a><a href="#contact">提交需求</a></div>
        </div>
        <div className="section-shell footer-legal"><span>© 2026 深圳市看人之大科技有限公司</span><span>图片用于当前网站视觉展示，正式发布前可替换为自有产品实拍。</span></div>
      </footer>
    </main>
  );
}
