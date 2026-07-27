"use client";

import { FormEvent, useState } from "react";

const audienceEntries = [
  {
    label: "品牌 / 企业采购",
    title: "找可落地的材料、成品与定制方案",
    copy: "从材料小样、功能服装到批量项目，先看实物，再确认规格与报价。",
    href: "#materials",
  },
  {
    label: "渠道 / 代理合作",
    title: "获取产品资料、样品与合作支持",
    copy: "按客户方向组合资料包与样品箱，支持项目沟通、报价和交付跟进。",
    href: "#support",
  },
  {
    label: "产业项目",
    title: "围绕性能、结构与场景共同打样",
    copy: "把使用环境、结构约束和交付要求转成材料选择与样品路径。",
    href: "#solutions",
  },
] as const;

const materialCards = [
  {
    code: "MEMBRANE",
    title: "功能膜与复合面料",
    summary: "面向功能服装与轻量装备的外层、膜层和基布组合方向。",
    canDo: "材料选型、复合结构讨论、面料小样与成品打样协同",
    projects: ["功能外层", "户外服装", "轻量装备"],
    sample:
      "告诉我们使用环境、数量与时间计划，先确认可提供的小样、结构资料和打样方式。",
    visual: "layers",
  },
  {
    code: "PI",
    title: "聚酰亚胺轻暖材料",
    summary: "现有材料形态覆盖纤维、纱线、织物、无纺与絮片方向。",
    canDo: "服装内层、中间层、填充结构与功能纺织品打样",
    projects: ["轻暖服装", "功能纺织", "内层系统"],
    sample:
      "可从材料形态或目标成品切入，确认小样、样品结构与项目文件。",
    visual: "pi",
  },
  {
    code: "BASALT",
    title: "玄武岩纤维复合材料",
    summary: "现有材料形态覆盖原丝、织物、毡、预浸料与复合制品方向。",
    canDo: "结构材料选型、复合构件讨论、工程制品与应用样品协同",
    projects: ["结构部件", "建筑市政", "交通与海洋"],
    sample:
      "按载体、尺寸、工况与文件要求确认材料形态、样品和后续验证安排。",
    visual: "basalt",
  },
] as const;

const solutions = [
  {
    kicker: "成品解决方案",
    title: "功能服装材料系统",
    copy: "围绕外层功能膜、复合面料与 PI 轻暖材料，组合服装外层、中间层和填充结构，形成可看样、可调整的成品方向。",
    tags: ["功能外层", "PI 中间层", "结构打样"],
    visual: "apparel",
  },
  {
    kicker: "复合材料方案",
    title: "结构与工程制品",
    copy: "从玄武岩纤维织物、毡和预浸料等材料形态出发，结合板材、管道、格栅与部件载体讨论样品路径。",
    tags: ["板材 / 管道", "格栅 / 构件", "复合部件"],
    visual: "engineering",
  },
  {
    kicker: "产业项目方案",
    title: "按使用场景共同打样",
    copy: "面向交通、低空、建筑、市政、海洋与运动载体，先明确环境与结构约束，再安排材料、工艺和样品协同。",
    tags: ["场景诊断", "材料组合", "项目交付"],
    visual: "applications",
  },
] as const;

const supportItems = [
  ["材料资料", "按材料方向提供可公开的形态、应用与项目沟通资料。"],
  ["样品支持", "根据采购、渠道或产业项目需求确认材料小样与样品箱。"],
  ["打样协同", "围绕结构、尺寸、场景与交付要求推进样品确认。"],
  ["批量报价", "在规格、数量与交付范围明确后提供项目报价。"],
] as const;

const process = [
  ["提交需求", "说明使用场景、材料方向、数量和时间计划。"],
  ["确认样品", "匹配材料形态、资料与可执行的拿样方式。"],
  ["打样报价", "需要定制时确认结构、样品与项目报价。"],
  ["交付跟进", "围绕文件、供应、反馈与批量交付持续推进。"],
] as const;

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="材料加解决方案首页">
          <span className="brand-mark">M+</span>
          <span className="brand-copy">
            <strong>材料＋解决方案</strong>
            <small>MATERIALS × SOLUTIONS</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#materials">材料产品</a>
          <a href="#audiences">适用客户</a>
          <a href="#solutions">成品方案</a>
          <a href="#support">合作支持</a>
        </nav>
        <a className="header-cta" href="#contact">
          联系 BD
        </a>
        <details className="mobile-nav">
          <summary aria-label="打开导航">菜单</summary>
          <nav aria-label="移动端导航">
            <a href="#materials">材料产品</a>
            <a href="#audiences">适用客户</a>
            <a href="#solutions">成品方案</a>
            <a href="#support">合作支持</a>
            <a href="#contact">联系 BD</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow light">FUNCTIONAL & COMPOSITE MATERIALS</p>
            <h1 id="hero-title">功能材料与成品解决方案，从样品到项目交付</h1>
            <p className="hero-lede">
              为品牌、渠道与产业客户提供功能膜与复合面料、聚酰亚胺轻暖材料、玄武岩纤维复合材料，以及对应的成品开发与行业应用方案。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#support">
                预约样品箱
              </a>
              <a className="button button-ghost" href="#contact">
                提交定制需求
              </a>
            </div>
            <ul className="hero-deliverables" aria-label="可提供内容">
              <li>
                <span>01</span>
                材料小样
              </li>
              <li>
                <span>02</span>
                结构打样
              </li>
              <li>
                <span>03</span>
                成品方案
              </li>
              <li>
                <span>04</span>
                批量交付
              </li>
            </ul>
          </div>

          <div className="specimen-rack" aria-label="现有材料与应用视觉">
            <div className="rack-head">
              <span>现有材料入口</span>
              <b>3 MATERIAL FAMILIES</b>
            </div>
            <div className="specimen specimen-membrane">
              <div className="layer-sample" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div>
                <span>功能膜 / 复合面料</span>
                <small>外层 · 膜层 · 基布</small>
              </div>
            </div>
            <div className="specimen specimen-pi">
              <div className="source-frame source-pi" aria-hidden="true">
                <img
                  src="materials/pi-apparel-source.jpg"
                  alt=""
                  loading="eager"
                />
              </div>
              <div>
                <span>PI 轻暖材料</span>
                <small>纤维 · 织物 · 絮片</small>
              </div>
            </div>
            <div className="specimen specimen-basalt">
              <div className="source-frame source-basalt" aria-hidden="true">
                <img
                  src="materials/basalt-forms-source.jpg"
                  alt=""
                  loading="eager"
                />
              </div>
              <div>
                <span>玄武岩纤维复合材料</span>
                <small>原丝 · 织物 · 复合制品</small>
              </div>
            </div>
            <div className="rack-foot">
              <span>材料</span>
              <i />
              <span>样品</span>
              <i />
              <span>项目</span>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-strip" id="audiences">
        <div className="section-shell audience-grid">
          {audienceEntries.map((item) => (
            <a href={item.href} key={item.label}>
              <span>{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
              <b>查看合作入口 →</b>
            </a>
          ))}
        </div>
      </section>

      <section className="materials-section" id="materials">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-label">三类可提供内容</p>
              <h2>材料、用途和拿样方式，一次看清</h2>
            </div>
            <p>
              可从材料小样开始，也可以直接带着成品或产业项目需求沟通。具体型号、参数与适用标准在项目确认时核对。
            </p>
          </div>

          <div className="material-card-grid">
            {materialCards.map((item) => (
              <article className={`material-card ${item.visual}`} key={item.code}>
                <div className="material-visual" aria-hidden="true">
                  {item.visual === "layers" && (
                    <div className="material-layer-stack">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                  {item.visual === "pi" && (
                    <img src="materials/pi-apparel-source.jpg" alt="" />
                  )}
                  {item.visual === "basalt" && (
                    <img src="materials/basalt-forms-source.jpg" alt="" />
                  )}
                  <span>{item.code}</span>
                </div>
                <div className="material-content">
                  <p className="material-code">{item.code}</p>
                  <h3>{item.title}</h3>
                  <p className="material-summary">{item.summary}</p>
                  <dl>
                    <div>
                      <dt>能做什么</dt>
                      <dd>{item.canDo}</dd>
                    </div>
                    <div>
                      <dt>适合项目</dt>
                      <dd>
                        {item.projects.map((project) => (
                          <span key={project}>{project}</span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt>如何拿样</dt>
                      <dd>{item.sample}</dd>
                    </div>
                  </dl>
                  <a className="text-link" href="#contact">
                    预约样品箱 <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="support-section" id="support">
        <div className="section-shell support-grid">
          <div className="support-intro">
            <p className="section-label">拿样与合作支持</p>
            <h2>先把真实材料和样品拿到手</h2>
            <p>
              品牌采购可看材料与成品方向，渠道伙伴可申请资料与样品支持，产业项目可按使用场景进入共同打样。
            </p>
            <div className="support-actions">
              <a className="button button-primary" href="#contact">
                预约样品箱
              </a>
              <a className="button button-dark" href="#contact">
                获取批量报价
              </a>
            </div>
          </div>
          <div className="support-list">
            {supportItems.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-label">代表解决方案</p>
              <h2>从材料形态，做到客户看得见的样品</h2>
            </div>
            <p>
              下面展示的是当前可讨论、可进入打样的方向，不是固定规格现货。项目从真实需求和样品确认开始。
            </p>
          </div>
          <div className="solution-stack">
            {solutions.map((item, index) => (
              <article className={`solution-card ${item.visual}`} key={item.title}>
                <div className="solution-media" aria-hidden="true">
                  {item.visual === "apparel" && (
                    <img src="materials/pi-apparel-source.jpg" alt="" />
                  )}
                  {item.visual === "engineering" && (
                    <img src="materials/basalt-forms-source.jpg" alt="" />
                  )}
                  {item.visual === "applications" && (
                    <img src="materials/basalt-applications-source.jpg" alt="" />
                  )}
                </div>
                <div className="solution-copy">
                  <div className="solution-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p>{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <span>{item.copy}</span>
                  <ul>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href="#contact">
                    提交定制需求 <b>→</b>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cooperation-section">
        <div className="section-shell cooperation-grid">
          <div className="cooperation-copy">
            <p className="section-label">三种合作方式</p>
            <h2>采购、代理或产业项目，都有明确入口</h2>
            <p>
              不需要先理解复杂材料体系。告诉我们客户类型和当前任务，我们会从样品、资料、报价或共同打样中安排下一步。
            </p>
          </div>
          <div className="cooperation-cards">
            <article>
              <span>品牌企业采购</span>
              <p>材料小样、成品方向、定制需求与批量报价。</p>
              <a href="#contact">预约样品箱 →</a>
            </article>
            <article>
              <span>渠道代理合作</span>
              <p>产品资料、样品支持、项目沟通与渠道合作。</p>
              <a href="#contact">联系 BD →</a>
            </article>
            <article>
              <span>产业项目共创</span>
              <p>围绕场景、结构与交付要求共同定义样品。</p>
              <a href="#contact">提交定制需求 →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <div className="process-title">
            <p className="section-label">合作流程</p>
            <h2>四步进入项目</h2>
          </div>
          <ol className="process-list">
            {process.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="company-section">
        <div className="section-shell company-grid">
          <div className="company-statement">
            <p className="section-label">项目服务</p>
            <h2>让材料、样品和交付接得起来</h2>
          </div>
          <div className="company-copy">
            <p>
              围绕品牌、渠道与产业客户需求，提供材料选型、规格沟通、样品对接、资料整理、检测协同、供应协调和交付跟进。
            </p>
            <ul>
              <li>深圳主体 · 东莞服务</li>
              <li>材料小样 · 成品打样</li>
              <li>项目报价 · 交付跟进</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">START WITH A REAL REQUIREMENT</p>
            <h2>告诉我们要做什么，先安排资料和样品</h2>
            <p>
              请说明客户类型、材料或成品方向、预计数量与时间计划。我们会判断从样品箱、批量报价还是共同打样开始。
            </p>
            <div className="contact-actions">
              <a className="button button-ghost" href="tel:+8613712670275">
                联系 BD
              </a>
              <a className="button button-ghost" href="mailto:540148510@qq.com">
                获取批量报价
              </a>
            </div>
            <div className="contact-details">
              <strong>深圳市看人之大科技有限公司</strong>
              <a href="tel:+8613712670275">137 1267 0275</a>
              <a href="tel:+8613549376386">135 4937 6386</a>
              <a href="mailto:540148510@qq.com">540148510@qq.com</a>
              <p>
                广东省东莞市东城街道莞长路东城段143号6栋兴华智慧城1101、1102室
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <label>
              姓名
              <input name="name" required placeholder="怎么称呼您" />
            </label>
            <label>
              公司 / 机构
              <input name="company" placeholder="您的公司或机构" />
            </label>
            <label>
              联系电话
              <input
                name="phone"
                required
                inputMode="tel"
                placeholder="方便联系的号码"
              />
            </label>
            <label>
              客户类型
              <select name="customer" defaultValue="brand">
                <option value="brand">品牌 / 企业采购</option>
                <option value="channel">渠道 / 代理合作</option>
                <option value="industry">产业项目</option>
                <option value="unsure">暂不确定，请协助判断</option>
              </select>
            </label>
            <label className="full">
              材料或成品方向
              <select name="direction" defaultValue="membrane">
                <option value="membrane">功能膜与复合面料</option>
                <option value="pi">聚酰亚胺轻暖材料</option>
                <option value="basalt">玄武岩纤维复合材料</option>
                <option value="finished">成品解决方案</option>
                <option value="other">其他产业应用</option>
              </select>
            </label>
            <label className="full">
              项目需求
              <textarea
                name="message"
                rows={5}
                placeholder="使用场景、数量、时间计划，以及希望先看什么样品"
              />
            </label>
            <button className="button button-primary full" type="submit">
              {sent ? "请通过电话或邮箱联系 BD" : "提交定制需求"}
            </button>
            <small className="full">
              当前为前端需求表单演示，不会自动发送或保存信息。
            </small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <span className="brand-mark">M+</span>
            <div>
              <strong>材料＋解决方案</strong>
              <p>功能材料 · 复合材料 · 成品解决方案</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#materials">材料产品</a>
            <a href="#solutions">代表方案</a>
            <a href="#support">拿样支持</a>
            <a href="#contact">联系 BD</a>
          </div>
        </div>
        <div className="section-shell footer-legal">
          <span>© 2026 深圳市看人之大科技有限公司</span>
          <span>
            材料参数、检测结论、适用标准与供应责任以具体项目确认文件为准。
          </span>
        </div>
      </footer>
    </main>
  );
}
