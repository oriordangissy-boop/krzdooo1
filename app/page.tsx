"use client";

import { FormEvent, useState } from "react";

const materials = [
  {
    key: "membrane",
    code: "MEMBRANE",
    title: "功能膜与复合面料",
    role: "把外层、膜层与基布组织成可讨论的结构",
    description:
      "面向功能服装与轻量装备的材料组合方向。公开页面只说明材料形态与打样路径，具体膜种、参数和适用标准按项目资料确认。",
    forms: ["膜材", "复合面料", "层压结构"],
    applications: ["功能外层", "户外装备", "轻量防护"],
    source: "现有服装解决方案资料",
    tone: "cyan",
  },
  {
    key: "pi",
    code: "PI",
    title: "聚酰亚胺纤维材料",
    role: "为轻暖、内层与功能纺织提供材料选项",
    description:
      "现有 PI 资料覆盖纤维、纱线、织物、絮片与无纺形态。材料性能、检测结果和具体用途不在首页作绝对承诺，需结合样品与文件核对。",
    forms: ["纤维 / 纱线", "织物 / 无纺", "絮片 / 填充"],
    applications: ["服装内层", "中间层", "功能纺织品"],
    source: "PI 材料资料已归档",
    tone: "amber",
  },
  {
    key: "basalt",
    code: "BASALT",
    title: "玄武岩纤维复合材料",
    role: "为结构、构件与工程载体提供材料路径",
    description:
      "现有宣传资料覆盖原丝、织物、毡、预浸料与复合制品，并列出建筑、市政、交通、海洋等应用方向。项目落地前仍需核对规格、样品与检测文件。",
    forms: ["原丝 / 织物", "毡 / 预浸料", "复合制品"],
    applications: ["工程构件", "交通部件", "建筑与市政"],
    source: "企业宣传册资料已归档",
    tone: "stone",
  },
] as const;

const standardModules = [
  ["材料模块", "从已归档材料形态中缩小选择范围，先确认可提供资料与样品。"],
  ["工艺模块", "围绕成形、复合、层压与结构组合，使用可复用的沟通清单。"],
  ["交付模块", "按规格核对、样品确认、报价与供应协同推进批量项目。"],
] as const;

const customModules = [
  ["需求诊断", "按行业、使用者、环境、数量与技术要求拆解问题。"],
  ["组合方案", "匹配材料形态、结构路径、工艺节点与验证方式。"],
  ["打样确认", "把方案转成可触摸、可比较、可修订的项目样品。"],
  ["项目交付", "围绕文件、供应、反馈与交付节奏持续跟进。"],
] as const;

const craftPaths = [
  {
    index: "A",
    title: "材料成形",
    copy: "纤维、纱线、织物、无纺、毡等形态，是进入服装或构件方案的第一层选择。",
    output: "输出：候选材料形态",
  },
  {
    index: "B",
    title: "复合与层压",
    copy: "根据载体需求讨论膜层、基布、预浸料与复合结构，不把单一材料硬套进所有产品。",
    output: "输出：结构组合建议",
  },
  {
    index: "C",
    title: "结构与产品化",
    copy: "把材料放进服装、部件、板材、管道或其他载体时，同步核对尺寸、界面与制造约束。",
    output: "输出：样品路径",
  },
  {
    index: "D",
    title: "资料与验证协同",
    copy: "围绕规格、应用说明、样品反馈、检测资料与交付信息建立项目文档。",
    output: "输出：项目确认清单",
  },
] as const;

const process = [
  ["01", "材料", "确认候选材料、可提供形态和现有资料边界。"],
  ["02", "工艺", "选择成形、复合、层压或结构组合路径。"],
  ["03", "问题", "写清使用环境、对象、数量、预算和必须解决的问题。"],
  ["04", "方案", "判断采用标准模块、模块化升级，还是定制行业方案。"],
  ["05", "打样", "形成样品，核对规格，并按项目要求协同检测资料。"],
  ["06", "交付", "完成报价、供应协调、项目反馈与批量交付跟进。"],
] as const;

const capabilityMap = [
  {
    title: "服装与功能纺织",
    source: "PI 资料、功能膜与服装方案资料",
    materials: "功能膜 / PI 纤维 / 复合面料",
    next: "样品与规格确认",
  },
  {
    title: "装备与结构部件",
    source: "玄武岩纤维复合材料宣传资料",
    materials: "织物 / 毡 / 预浸料 / 复合制品",
    next: "结构约束诊断",
  },
  {
    title: "交通与低空载体",
    source: "宣传册应用方向",
    materials: "复合板材 / 结构件 / 轻量部件",
    next: "工况与验证要求确认",
  },
  {
    title: "建筑与市政构件",
    source: "宣传册应用方向与产品形态",
    materials: "板材 / 管道 / 格栅 / 户外构件",
    next: "材料形态与尺寸确认",
  },
  {
    title: "新能源设施",
    source: "宣传册应用方向",
    materials: "支架 / 构件 / 复合结构",
    next: "环境与标准要求确认",
  },
  {
    title: "海洋与运动载体",
    source: "宣传册应用方向",
    materials: "复合构件 / 器材部件 / 工程制品",
    next: "样品路径评估",
  },
] as const;

const proofItems = [
  ["已归档", "三类公开材料入口", "功能膜方向、PI 纤维材料、玄武岩纤维复合材料。"],
  ["已归档", "材料形态与应用资料", "现有 PDF 覆盖纤维、纱线、织物、毡、预浸料、复合制品及多个应用方向。"],
  ["可执行", "项目服务动作", "规格沟通、样品对接、资料整理、检测协同、供应协调与交付跟进。"],
  ["待项目确认", "参数、标准与检测结论", "不在首页用未经逐项核验的数字、认证、客户或绝对性能作承诺。"],
] as const;

export default function Home() {
  const [activeMaterial, setActiveMaterial] =
    useState<(typeof materials)[number]["key"]>("membrane");
  const [sent, setSent] = useState(false);
  const material =
    materials.find((item) => item.key === activeMaterial) ?? materials[0];

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
          <a href="#routes">双轨合作</a>
          <a href="#materials">材料与工艺</a>
          <a href="#path">解决路径</a>
          <a href="#mapping">行业映射</a>
          <a href="#evidence">证据边界</a>
        </nav>
        <a className="header-cta" href="#contact">
          联系 BD
        </a>
        <details className="mobile-nav">
          <summary aria-label="打开导航">菜单</summary>
          <nav aria-label="移动端导航">
            <a href="#routes">双轨合作</a>
            <a href="#materials">材料与工艺</a>
            <a href="#path">解决路径</a>
            <a href="#mapping">行业映射</a>
            <a href="#contact">联系 BD</a>
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
        </div>
        <div className="rail-field" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-inner shell">
          <div className="hero-copy">
            <p className="eyebrow light">
              STANDARD MODULES / CUSTOM SOLUTIONS
            </p>
            <h1 id="hero-title">
              先看材料与工艺，
              <br />
              再决定怎么解决。
            </h1>
            <p className="hero-lede">
              面向产业客户、品牌方与企业采购，提供标准材料/工艺模块与定制行业解决方案。把材料形态、制造路径、样品和交付信息讲清楚，让项目从询问走向实物。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#flagship">
                预约样品箱
              </a>
              <a className="button button-ghost" href="#contact">
                提交定制需求
              </a>
            </div>
          </div>
          <aside className="hero-switchboard" aria-label="两条合作路线">
            <div className="switchboard-head">
              <span>合作路线</span>
              <b>双轨</b>
            </div>
            <a href="#standard-route">
              <span>01</span>
              <div>
                <strong>标准材料 / 工艺模块</strong>
                <small>有限选择 · 复用流程 · 批量协同</small>
              </div>
            </a>
            <div className="route-switch">
              <i />
              <p>模块化升级接口</p>
            </div>
            <a href="#custom-route">
              <span>02</span>
              <div>
                <strong>定制行业解决方案</strong>
                <small>需求诊断 · 组合打样 · 项目交付</small>
              </div>
            </a>
          </aside>
        </div>
        <div className="hero-caption shell">
          <span>材料形态</span>
          <i />
          <span>工艺路径</span>
          <i />
          <span>样品确认</span>
          <i />
          <span>项目交付</span>
        </div>
      </section>

      <section className="routes-section" id="routes">
        <div className="section-shell">
          <div className="section-heading split">
            <div>
              <p className="section-label">两条路线，一个目的</p>
              <h2>标准化负责效率，定制化说明价值从哪里来。</h2>
            </div>
            <p>
              客户不需要先听完整技术史。先判断需求能否由成熟模块承接；需要加入行业、品牌、场景或结构要求时，再进入模块化升级与定制项目。
            </p>
          </div>

          <div className="route-board">
            <article className="route-card standard" id="standard-route">
              <div className="route-card-head">
                <span>STANDARD</span>
                <p>效率路线</p>
              </div>
              <h3>标准材料 / 工艺模块</h3>
              <p className="route-intro">
                适合需求相对明确、希望尽快看样和建立批量报价基础的项目。
              </p>
              <ol>
                {standardModules.map(([title, copy], index) => (
                  <li key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a className="text-link" href="#contact">
                获取批量报价 <span>→</span>
              </a>
            </article>

            <aside className="upgrade-gate">
              <span>MODULE UPGRADE</span>
              <div className="gate-symbol" aria-hidden="true">
                <i />
                <i />
              </div>
              <h3>模块化 / 半定制升级接口</h3>
              <p>
                在成熟材料和工艺底座上，增加品牌识别、使用场景、结构尺寸或项目文件要求。
              </p>
              <small>不是一档含混产品，而是进入定制项目的清晰分界。</small>
            </aside>

            <article className="route-card custom" id="custom-route">
              <div className="route-card-head">
                <span>CUSTOM</span>
                <p>价值路线</p>
              </div>
              <h3>定制行业解决方案</h3>
              <p className="route-intro">
                适合需要跨材料、跨工艺或结合具体工况共同定义样品的项目。
              </p>
              <ol>
                {customModules.map(([title, copy], index) => (
                  <li key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <a className="text-link" href="#contact">
                提交定制需求 <span>→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="flagship-section" id="flagship">
        <div className="flagship-media">
          <img
            src="https://images.pexels.com/photos/19404760/pexels-photo-19404760.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="功能服装材料系统应用视觉示意"
          />
          <div />
        </div>
        <div className="flagship-inner section-shell">
          <div className="flagship-copy">
            <p className="section-label">首页代表方案 / 当前优先入口</p>
            <h2>功能服装材料系统</h2>
            <p>
              以服装作为客户最容易感知的第一张样板：外层讨论功能膜与复合结构，中间层讨论
              PI 材料形态，再根据穿着场景、活动强度与交付要求形成样品方案。
            </p>
            <div className="flagship-modules">
              <div>
                <span>外层</span>
                <strong>功能膜 / 复合面料方向</strong>
              </div>
              <div>
                <span>中间层</span>
                <strong>PI 织物 / 絮片方向</strong>
              </div>
              <div>
                <span>系统</span>
                <strong>结构组合 / 样品确认</strong>
              </div>
            </div>
            <p className="flagship-note">
              这是材料组合与打样路径的代表方案，不等于固定现货，也不构成公开参数承诺。
            </p>
            <a className="button button-primary" href="#contact">
              预约样品箱
            </a>
          </div>
        </div>
      </section>

      <section className="materials-section" id="materials">
        <div className="section-shell">
          <div className="section-heading split">
            <div>
              <p className="section-label">当前公开材料入口</p>
              <h2>材料不是目录，是解决问题时承担的角色。</h2>
            </div>
            <p>
              公开页面先列三类已有资料入口，不代表材料池只有三类。具体型号、参数、标准和检测结论，以项目文件、样品与核验结果为准。
            </p>
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
                  <span>{item.code}</span>
                  <strong>{item.title}</strong>
                  <small>{item.source}</small>
                </button>
              ))}
            </div>
            <article
              className={`material-detail ${material.tone}`}
              aria-live="polite"
            >
              <span className="material-status">{material.source}</span>
              <div className="material-detail-copy">
                <p className="eyebrow">{material.code} / MATERIAL ROLE</p>
                <h3>{material.role}</h3>
                <p>{material.description}</p>
                <div className="material-facts">
                  <div>
                    <span>资料中的材料形态</span>
                    <ul>
                      {material.forms.map((form) => (
                        <li key={form}>{form}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span>优先讨论的载体</span>
                    <ul>
                      {material.applications.map((application) => (
                        <li key={application}>{application}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a className="text-link" href="#contact">
                  获取批量报价 <span>→</span>
                </a>
              </div>
              <span className="material-word">{material.code}</span>
            </article>
          </div>
        </div>
      </section>

      <section className="craft-section" id="craft">
        <div className="section-shell">
          <div className="section-heading split">
            <div>
              <p className="section-label">工艺能力如何进入项目</p>
              <h2>不只问“是什么材料”，还要问“怎么把它做成载体”。</h2>
            </div>
            <p>
              工艺模块按项目路径表达，不虚构自有产线或绝对制造能力；实际工序、供应主体和质量责任在项目确认时写清。
            </p>
          </div>
          <div className="craft-grid">
            {craftPaths.map((item) => (
              <article key={item.index}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <small>{item.output}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="path-section" id="path">
        <div className="section-shell path-grid">
          <div className="path-intro">
            <p className="section-label">从材料到交付</p>
            <h2>六个节点，把技术信息变成可推进的项目。</h2>
            <p>
              标准路线与定制路线共用同一条证据链；区别在于选择范围、专属要求和打样深度。
            </p>
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

      <section className="mapping-section" id="mapping">
        <div className="section-shell">
          <div className="mapping-title">
            <div>
              <p className="section-label">长期能力映射 / 不是现货清单</p>
              <h2>同一套材料与工艺，如何支撑不同载体。</h2>
            </div>
            <p>
              这里展示资料中已经出现的应用类别与下一步核验动作，不把它们包装成六件现货、六个客户案例或完整
              7×7 产品矩阵。
            </p>
          </div>
          <div className="mapping-grid">
            {capabilityMap.map((item, index) => (
              <article key={item.title}>
                <div className="mapping-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>资料来源</dt>
                    <dd>{item.source}</dd>
                  </div>
                  <div>
                    <dt>材料 / 形态</dt>
                    <dd>{item.materials}</dd>
                  </div>
                  <div>
                    <dt>下一步</dt>
                    <dd>{item.next}</dd>
                  </div>
                </dl>
                <a href="#contact" aria-label={`咨询${item.title}方案`}>
                  提交定制需求 <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="section-shell evidence-grid">
          <div className="evidence-intro">
            <p className="section-label">用资料说话，也把边界说清楚</p>
            <h2>哪些已经归档，哪些必须随项目核验。</h2>
            <p>
              不公开未经证明的政府背书、合作机构、客户案例、认证归属、性能数字或无证据的绝对性声明。
            </p>
          </div>
          <div className="proof-list">
            {proofItems.map(([status, title, copy]) => (
              <article key={title}>
                <span>{status}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-image">
          <img
            src="https://images.pexels.com/photos/6778713/pexels-photo-6778713.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="功能材料应用视觉示意"
          />
        </div>
        <div className="company-copy">
          <p className="section-label">深圳主体 · 东莞服务</p>
          <h2>我们负责让材料项目继续往前走。</h2>
          <p>
            围绕客户项目需求，提供材料选型、规格沟通、样品对接、资料整理、检测协同、供应协调和交付跟进。
          </p>
          <ul>
            <li>
              <span>需求</span>
              <b>讲清使用场景、采购要求与项目边界</b>
            </li>
            <li>
              <span>样品</span>
              <b>把材料与工艺选择转成可确认的实物</b>
            </li>
            <li>
              <span>交付</span>
              <b>围绕报价、文件、供应与反馈持续推进</b>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">START WITH A REAL REQUIREMENT</p>
            <h2>带着一个问题来，先判断走哪条路线。</h2>
            <p>
              请告诉我们使用环境、材料方向、数量与时间计划。标准需求先看样品与批量报价，复杂需求进入定制方案沟通。
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
              合作路线
              <select name="route" defaultValue="standard">
                <option value="standard">标准材料 / 工艺模块</option>
                <option value="upgrade">模块化 / 半定制升级</option>
                <option value="custom">定制行业解决方案</option>
                <option value="unsure">暂不确定，请协助判断</option>
              </select>
            </label>
            <label className="full">
              材料或应用方向
              <select name="direction" defaultValue="clothing">
                <option value="clothing">服装与功能纺织</option>
                <option value="basalt">玄武岩纤维复合材料</option>
                <option value="transport">交通与装备部件</option>
                <option value="construction">建筑与市政构件</option>
                <option value="other">其他行业应用</option>
              </select>
            </label>
            <label className="full">
              需要解决的问题
              <textarea
                name="message"
                rows={5}
                placeholder="使用环境、数量、时间计划，以及最需要解决的问题"
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
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">M+</span>
            <strong>材料＋解决方案</strong>
            <p>标准材料 / 工艺模块 · 定制行业解决方案</p>
          </div>
          <div>
            <b>能力入口</b>
            <a href="#materials">材料模块</a>
            <a href="#craft">工艺路径</a>
            <a href="#mapping">行业映射</a>
          </div>
          <div>
            <b>项目动作</b>
            <a href="#contact">预约样品箱</a>
            <a href="#contact">获取批量报价</a>
            <a href="#contact">提交定制需求</a>
          </div>
        </div>
        <div className="section-shell footer-legal">
          <span>© 2026 深圳市看人之大科技有限公司</span>
          <span>
            材料参数、适用标准与检测结论以项目确认文件为准。
          </span>
        </div>
      </footer>
    </main>
  );
}
