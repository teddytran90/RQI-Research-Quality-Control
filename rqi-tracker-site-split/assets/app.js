const MCOLORS=['#FFC709','#27c47e','#f0a020','#e0404f','#8b6fff','#18c49a','#e05090','#f06030'];
const ICON_CHEVRON_LEFT=`<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0303 19.5303C16.3232 19.2374 16.3232 18.7626 16.0303 18.4697L9.56066 12L16.0303 5.53033C16.3232 5.23744 16.3232 4.76256 16.0303 4.46967C15.7374 4.17678 15.2626 4.17678 14.9697 4.46967L7.96967 11.4697C7.67678 11.7626 7.67678 12.2374 7.96967 12.5303L14.9697 19.5303C15.2626 19.8232 15.7374 19.8232 16.0303 19.5303Z" fill="currentColor"/></svg>`;
const ICON_CHEVRON_RIGHT=`<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.96967 19.5303C7.67678 19.2374 7.67678 18.7626 7.96967 18.4697L14.4393 12L7.96967 5.53033C7.67678 5.23744 7.67678 4.76256 7.96967 4.46967C8.26256 4.17678 8.73744 4.17678 9.03033 4.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="currentColor"/></svg>`;
const GATES=[
  {id:'g1',name:'Briefing trước nghiên cứu',desc:'Câu hỏi nghiên cứu, phương pháp, kế hoạch mẫu & phê duyệt stakeholder TRƯỚC khi ra thực địa'},
  {id:'g2',name:'Kiểm tra giữa nghiên cứu',desc:'Xem xét độ đủ mẫu, chủ đề ban đầu, gắn cờ sai lệch sau 40–50% công việc thực địa'},
  {id:'g3',name:'Phản biện đồng nghiệp',desc:'Người nghiên cứu khác phản biện các phát hiện & khuyến nghị trước khi công bố ra ngoài nhóm'},
];

// ─────────────────────────────────────────────────────────────
// GROUPS — 11 research types, 2 role tracks
//
// Quality criteria use 5 universal dimensions + 1 type-specific:
//  [1] Tính đầy đủ tài liệu      — raw data, report, traceability
//  [2] Bám sát Biz Goal & PS      — alignment với mục tiêu kinh doanh / problem statement
//  [3] Độ tin cậy dữ liệu         — source, sample, methodology rigor
//  [4] Tính actionable của output — insight → decision → owner → action
//  [5] Tiêu chí đặc thù           — riêng từng loại hình
// ─────────────────────────────────────────────────────────────
const GROUPS={

  // ══════════════════════════════════════════════════════════
  // TRACK 1 — UX/UI DESIGNER (3 nhóm theo image 1)
  // ══════════════════════════════════════════════════════════
  uiux:[

    // ── A. NGHIÊN CỨU NGƯỜI DÙNG ─────────────────────────────
    // Sub-methods: Usability testing · User interview · Contextual inquiry · Survey / Diary study
    {id:'user-research',name:'Nghiên cứu người dùng',color:'#8b6fff',
     dod:[
       {id:'ur1',text:'Research plan được approve: objective, methodology, screener, sample size, timeline',core:true},
       {id:'ur2',text:'Raw data lưu đầy đủ và có thể truy xuất: recording, transcript, observation notes, survey response',core:true},
       {id:'ur3',text:'Mẫu đủ và đa dạng: ≥6 user/qualitative round · ≥50 response/survey · đủ segment được define trước',core:true},
       {id:'ur4',text:'Synthesis hoàn chỉnh: Affinity Map / thematic analysis với evidence link rõ cho mỗi insight',core:true},
       {id:'ur5',text:'Report đủ 4 phần: objective · method · findings · recommendations — gắn link về raw evidence',core:true},
       {id:'ur6',text:'Mỗi finding trace được về ≥2 user quote hoặc data point cụ thể — không có finding "chung chung"'},
       {id:'ur7',text:'Findings đã present cho design/product team; action items có owner & deadline rõ ràng'},
     ],
     qual:[
       {id:'urq1',name:'[1] Đầy đủ tài liệu',desc:'Toàn bộ raw data (recording, transcript, note) được lưu trữ có tổ chức, dễ truy xuất. Người khác có thể audit lại findings mà không cần hỏi researcher gốc.'},
       {id:'urq2',name:'[2] Bám sát Biz Goal & PS',desc:'Từng finding trả lời trực tiếp câu hỏi research đã đặt ra. Không có insight "hay nhưng không liên quan" làm loãng report. Recommendations link rõ về business goal cụ thể.'},
       {id:'urq3',name:'[3] Độ tin cậy dữ liệu',desc:'Sample đủ đa dạng (không chỉ convenience). Đạt theoretical saturation — không có insight mới sau 3 session cuối. Interview không có leading questions, facilitator trung lập.'},
       {id:'urq4',name:'[4] Tính actionable',desc:'Mỗi recommendation có thể thực thi được: gắn với feature/flow cụ thể, có priority rõ ràng, không phải lời khuyên chung chung như "cải thiện trải nghiệm người dùng".'},
       {id:'urq5',name:'[5] Traceability',desc:'Finding → evidence → design decision có thể trace ngược hoàn toàn. ≥60% recommendations được design team implement trong sprint tiếp theo (đo sau 4 tuần).'},
     ]},

    // ── B. NGHIÊN CỨU DỮ LIỆU & PHÂN TÍCH ───────────────────
    // Sub-methods: Analytics review · Heatmap/Session · A/B testing · Funnel analysis
    {id:'data-analytics',name:'Nghiên cứu dữ liệu & phân tích',color:'#FFC709',
     dod:[
       {id:'da1',text:'Tracking plan được document trước khi thu thập: event, property, trigger, owner, tool',core:true},
       {id:'da2',text:'Baseline metrics thiết lập TRƯỚC khi chạy bất kỳ test nào — không đo sau rồi so sánh ngược',core:true},
       {id:'da3',text:'A/B test: hypothesis đúng format, sample size tính trước bằng power analysis (α=0.05, power≥80%)',core:true},
       {id:'da4',text:'Heatmap/Session: ≥1,000 qualified sessions; Funnel: map đủ bước từ acquisition → activation → retention',core:true},
       {id:'da5',text:'Kết quả đạt ngưỡng thống kê: A/B test p<0.05 trước khi kết luận winner',core:true},
       {id:'da6',text:'Segment breakdown bắt buộc: mobile/desktop · new/returning · user tier · channel nguồn traffic'},
       {id:'da7',text:'Decision document: finding · confidence · recommendation · rollout plan · learning được archive'},
     ],
     qual:[
       {id:'daq1',name:'[1] Đầy đủ tài liệu',desc:'Tracking plan, raw data export, analysis script (nếu có) đều được lưu trữ và versioned. Dashboard link được đính kèm report. Người khác có thể reproduce kết quả.'},
       {id:'daq2',name:'[2] Bám sát Biz Goal & PS',desc:'Metrics được chọn gắn trực tiếp với business goal — không đo "vì đo được". Mỗi insight trả lời đúng câu hỏi kinh doanh đặt ra ban đầu, không lạc đề vào số liệu thú vị nhưng không liên quan.'},
       {id:'daq3',name:'[3] Độ tin cậy dữ liệu',desc:'Tracking accuracy < 2% error rate (verify với server-side log). A/B test không có Sample Ratio Mismatch (SRM >5% = phải dừng). Data không bị contaminated bởi bot, internal traffic, hay seasonal outlier chưa được loại trừ.'},
       {id:'daq4',name:'[4] Tính actionable',desc:'Mỗi metric drop/spike có explanation trong vòng 48h. Recommendation cụ thể: gắn tên feature, sprint, owner. Team không đọc xong rồi nói "thú vị" mà không làm gì.'},
       {id:'daq5',name:'[5] Causation Awareness',desc:'Report phân biệt rõ correlation vs. causation. Không kết luận causal khi chỉ có observational data. A/B test winner có primary metric + guardrail metric — không sacrifice metric quan trọng khác để win.'},
     ]},

    // ── C. NGHIÊN CỨU THỊ TRƯỜNG & ĐỐI THỦ (UX góc độ) ──────
    // Sub-methods: Competitor nghiên cứu · Heuristic evaluation · Trend nghiên cứu · Benchmarking
    {id:'market-ux',name:'Nghiên cứu thị trường & đối thủ',color:'#18c49a',
     dod:[
       {id:'mu1',text:'Competitor scope rõ: direct · indirect · substitute · emerging — không chỉ 2–3 tên quen thuộc',core:true},
       {id:'mu2',text:'Evidence-based audit: screenshot, recording, heuristic checklist cho từng đối thủ — không dùng recall',core:true},
       {id:'mu3',text:'Framework chuẩn áp dụng: heuristic evaluation (Nielsen) và/hoặc feature/UX matrix',core:true},
       {id:'mu4',text:'Positioning map hoàn thiện với ≥2 trục có ý nghĩa chiến lược thực sự',core:true},
       {id:'mu5',text:'Gap analysis xác định ≥3 design/UX opportunity cụ thể và có thể prioritize'},
       {id:'mu6',text:'Findings được link vào design backlog với owner và target sprint rõ ràng'},
     ],
     qual:[
       {id:'muq1',name:'[1] Đầy đủ tài liệu',desc:'Evidence cho mỗi claim được lưu có tổ chức: screenshot dated, audit note, recording clip. Mọi claim đều có thể verify lại — không phải lời kể của researcher.'},
       {id:'muq2',name:'[2] Bám sát Biz Goal & PS',desc:'Competitive analysis tập trung vào những gì đang cạnh tranh trực tiếp với sản phẩm mình. Opportunity findings gắn với chiến lược kinh doanh hiện tại — không phải "interesting things đối thủ làm".'},
       {id:'muq3',name:'[3] Độ tin cậy dữ liệu',desc:'Data ≤6 tháng (UX audit), ≤3 tháng (pricing/policy). Ghi rõ ngày thu thập cho từng đối thủ. Không mix data từ các thời điểm khác nhau mà không note rõ.'},
       {id:'muq4',name:'[4] Tính actionable',desc:'Mỗi opportunity gắn với feature/flow cụ thể, không nói chung "cải thiện UX". Findings được ưu tiên theo impact × feasibility — team biết làm gì trước.'},
       {id:'muq5',name:'[5] Analytical Depth',desc:'Phân tích vượt qua surface (đẹp/xấu, có/không feature) — giải thích được tại sao đối thủ chọn giải pháp đó, trade-off của họ là gì. Benchmarking có ngưỡng số liệu ngành cụ thể để so sánh.'},
     ]},
  ],

  // ══════════════════════════════════════════════════════════
  // TRACK 2 — UX RESEARCHER / STRATEGIC (6 nhóm theo image 2)
  // ══════════════════════════════════════════════════════════
  uxr:[

    // ── 1. NGHIÊN CỨU CHIẾN LƯỢC & ĐỊNH HƯỚNG KINH DOANH ────
    // Sub-methods: Generative nghiên cứu · Jobs-to-be-done · Segmentation research
    {id:'strategic',name:'Nghiên cứu chiến lược',color:'#8b6fff',
     dod:[
       {id:'st1',text:'Research question align với OKR / business problem cụ thể — được stakeholder sign-off trước field',core:true},
       {id:'st2',text:'≥12 in-depth interviews · đa dạng segment · raw data (recording + transcript) lưu đầy đủ',core:true},
       {id:'st3',text:'JTBD framework: core job, desired outcome, constraint đã document với ≥2 user quotes mỗi job',core:true},
       {id:'st4',text:'Segmentation hypothesis validate bằng quantitative data (survey ≥100 response hoặc analytics)',core:true},
       {id:'st5',text:'Synthesis dùng systematic method: affinity mapping, thematic analysis, hoặc grounded theory',core:true},
       {id:'st6',text:'Strategy deck present cho product leadership với Q&A session — feedback được ghi nhận'},
       {id:'st7',text:'Roadmap implication rõ ràng: "làm X trong 6 tháng tới vì Y" — không chỉ list findings'},
     ],
     qual:[
       {id:'stq1',name:'[1] Đầy đủ tài liệu',desc:'Raw interview recordings + transcripts + synthesis artifact đều được lưu trữ có tổ chức trong research repository. Executive summary ≤2 trang cho leadership, full report cho team.'},
       {id:'stq2',name:'[2] Bám sát Biz Goal & PS',desc:'Findings trả lời trực tiếp business question đã đặt ra — không chỉ là interesting insights. Mỗi recommendation liên kết rõ về OKR hoặc strategic decision cụ thể cần đưa ra.'},
       {id:'stq3',name:'[3] Độ tin cậy dữ liệu',desc:'Insights đến từ real user conversations, không phải brainstorm nội bộ hay desk research thuần túy. Segmentation được validate bằng quant data, không chỉ dựa vào qual. Có ≥2 nguồn độc lập xác nhận finding quan trọng.'},
       {id:'stq4',name:'[4] Tính actionable',desc:'Leadership có thể ra quyết định invest/build/kill dựa trên report này. Recommendation có risk-adjusted rationale rõ ràng — không chỉ "present options" mà không có recommendation.'},
       {id:'stq5',name:'[5] Strategic Depth',desc:'Insights đạt tầng "why" và "so what" — không dừng ở "what users do". Phân biệt rõ confirmed signal vs. emerging hypothesis. Stakeholder buy-in đạt được trước khi kết thúc research.'},
     ]},

    // ── 2. NGHIÊN CỨU HÀNH TRÌNH KHÁCH HÀNG (CX Research) ───
    // Sub-methods: Customer journey · Touchpoint nghiên cứu · Pain point mapping
    {id:'cx-journey',name:'CX Research — Hành trình KH',color:'#18c49a',
     dod:[
       {id:'cx1',text:'Journey map cover đầy đủ vòng đời: Awareness → Consideration → Purchase → Use → Advocacy',core:true},
       {id:'cx2',text:'Validate với ≥2 user segments khác nhau — map riêng nếu hành trình khác nhau đáng kể',core:true},
       {id:'cx3',text:'Emotional curve tại mỗi touchpoint có evidence từ user (quote/observation) — không phải giả định',core:true},
       {id:'cx4',text:'Touchpoint inventory đầy đủ: online (web, app, social, email) + offline (store, CS hotline, delivery)',core:true},
       {id:'cx5',text:'Pain points được prioritize theo impact × frequency matrix — không liệt kê đồng đều tất cả',core:true},
       {id:'cx6',text:'Journey map đã shared cross-functional: Sales, CS, Marketing, Product — có Q&A session'},
       {id:'cx7',text:'Service blueprint hoàn thiện nếu scope yêu cầu (có backstage process, support system)'},
     ],
     qual:[
       {id:'cxq1',name:'[1] Đầy đủ tài liệu',desc:'Journey map artifact export được (PDF, Miro, Figma) ở định dạng dùng chung. Raw evidence (interview clip, CS ticket, survey data) được link hoặc đính kèm. Người không làm research vẫn hiểu sau 10 phút đọc.'},
       {id:'cxq2',name:'[2] Bám sát Biz Goal & PS',desc:'Pain points được filter và ưu tiên theo strategic focus hiện tại của công ty — không liệt kê toàn bộ rồi để team tự chọn. Findings gắn với retention, conversion, hoặc business metric cụ thể.'},
       {id:'cxq3',name:'[3] Độ tin cậy dữ liệu',desc:'Cảm xúc được validate bởi chính user (quote, observation) — không phải giả định của researcher. Online và offline data được đối chiếu, không tách rời. Có ≥2 nguồn data cho mỗi touchpoint quan trọng.'},
       {id:'cxq4',name:'[4] Tính actionable',desc:'Top 3–5 pain points có recommendation cụ thể, owner, timeline — không phải toàn bộ journey map đều được "fix". Cross-functional team biết ai làm gì sau khi đọc xong.'},
       {id:'cxq5',name:'[5] Cross-channel Consistency',desc:'Online và offline touchpoint được phân tích đồng nhất, không ưu tiên digital quá mức. Moment of truth được xác định rõ — đây là nơi tập trung nguồn lực cải thiện trước.'},
     ]},

    // ── 3. NGHIÊN CỨU TRẢI NGHIỆM OFFLINE & THỰC ĐỊA ────────
    // Sub-methods: In-store observation · Mystery shopping · Ethnographic research
    {id:'offline-field',name:'Nghiên cứu Offline & thực địa',color:'#e0404f',
     dod:[
       {id:'of1',text:'Observation protocol chuẩn: checklist, role của observer, định nghĩa các behavior cần quan sát',core:true},
       {id:'of2',text:'≥8 field sessions tại địa điểm thực tế; Mystery shopping cover tất cả key touchpoints',core:true},
       {id:'of3',text:'≥2 researcher quan sát độc lập — findings được cross-check trước khi tổng hợp',core:true},
       {id:'of4',text:'Evidence có photo/video/audio (khi được phép) — không chỉ ghi nhớ và viết lại sau',core:true},
       {id:'of5',text:'Findings được triangulate với ≥1 nguồn data khác: survey, CS ticket, analytics, interview',core:true},
       {id:'of6',text:'Contextual info đầy đủ: location, time of day, staff profile, seasonal context, traffic pattern'},
       {id:'of7',text:'Service blueprint hoặc process map hoàn thiện nếu phát hiện systemic issue'},
     ],
     qual:[
       {id:'ofq1',name:'[1] Đầy đủ tài liệu',desc:'Field notes được viết ngay trong/sau session (không để qua ngày sau). Photo/video evidence được tag và organized. Protocol checklist đính kèm report để người khác audit được.'},
       {id:'ofq2',name:'[2] Bám sát Biz Goal & PS',desc:'Observation focus vào behaviors liên quan đến business problem đặt ra — không quan sát tất cả mọi thứ. Findings được filter theo strategic relevance trước khi đưa vào report chính.'},
       {id:'ofq3',name:'[3] Độ tin cậy dữ liệu',desc:'Inter-rater reliability đạt: ≥2 observer độc lập có findings đồng nhất ≥70% trên các behavior quan trọng. Không phụ thuộc vào subjective judgment của 1 người. Triangulation với data nguồn khác.'},
       {id:'ofq4',name:'[4] Tính actionable',desc:'Systemic issues (không phải 1-off incidents) được tách biệt rõ. Recommendations gắn với process change hoặc touchpoint cụ thể. CS/Operations team biết làm gì ngay sau khi nhận report.'},
       {id:'ofq5',name:'[5] Ecological Validity',desc:'Findings reflect real-world behavior — không phải behavior bị ảnh hưởng vì có researcher quan sát (Hawthorne effect). Mystery shopping kết hợp với passive observation để cross-validate.'},
     ]},

    // ── 4. NGHIÊN CỨU THỊ TRƯỜNG & CẠNH TRANH (Strategic) ───
    // Sub-methods: Market landscape · Competitive UX audit · Pricing perception
    {id:'market-strategic',name:'Nghiên cứu thị trường & cạnh tranh',color:'#f0a020',
     dod:[
       {id:'ms1',text:'Market landscape: direct + indirect + substitute + emerging disruptor — có market size estimate',core:true},
       {id:'ms2',text:'Competitive deep-dive ≥6 đối thủ: policy · pricing · product feature · UX flow · marketing message',core:true},
       {id:'ms3',text:'Pricing perception research: dùng Van Westendorp hoặc conjoint analysis — không chỉ hỏi open-end',core:true},
       {id:'ms4',text:'Positioning matrix ≥2 trục có ý nghĩa chiến lược; white space được xác định rõ',core:true},
       {id:'ms5',text:'Win/Loss analysis: phỏng vấn ≥5 user đã chọn hoặc rời bỏ đối thủ để hiểu lý do thực sự',core:true},
       {id:'ms6',text:'TAM/SAM/SOM estimate nếu scope yêu cầu — methodology và source ghi rõ'},
       {id:'ms7',text:'Strategic brief đã present cho BD/Marketing/Product leadership — decision được ghi nhận'},
     ],
     qual:[
       {id:'msq1',name:'[1] Đầy đủ tài liệu',desc:'Mỗi claim về thị trường và đối thủ có source cụ thể: tên báo cáo, ngày, trang. Screenshot cho các UX audit. Win/Loss interview được record. Không có claim "theo nguồn tin không chính thức".'},
       {id:'msq2',name:'[2] Bám sát Biz Goal & PS',desc:'Market analysis tập trung vào segments và use cases mà công ty đang hoặc sẽ cạnh tranh. Không nghiên cứu "toàn bộ thị trường fintech" mà không có focus rõ ràng. Findings liên kết với strategic decision đang cần đưa ra.'},
       {id:'msq3',name:'[3] Độ tin cậy dữ liệu',desc:'Policy & pricing data ≤3 tháng. UX audit ≤6 tháng. Market size từ ≥2 nguồn independent. Pricing research dùng validated methodology — không chỉ hỏi thẳng "bạn trả bao nhiêu?". Ghi ngày thu thập cho mỗi đối thủ.'},
       {id:'msq4',name:'[4] Tính actionable',desc:'Findings dẫn đến strategic decision cụ thể: enter/exit segment, reprice, feature priority. Không chỉ là competitive intelligence report dày mà không có recommendation. Leadership biết làm gì tiếp theo.'},
       {id:'msq5',name:'[5] Scope Completeness',desc:'Không bỏ sót fintech mới nổi, ngân hàng đang pivot, hay Big Tech đang enter market. Đặc biệt track các đối thủ đang ở giai đoạn fundraising — họ định hình thị trường 12–18 tháng tới.'},
     ]},

    // ── 5. NGHIÊN CỨU ĐO LƯỜNG TRẢI NGHIỆM (XM Research) ────
    // Sub-methods: NPS/CSAT/CES · Longitudinal study · Exit/Churn research
    {id:'xm-measure',name:'Nghiên cứu đo lường XM',color:'#FFC709',
     dod:[
       {id:'xm1',text:'Survey instrument validated: không có leading/double-barreled questions, đã pilot test ≥5 người',core:true},
       {id:'xm2',text:'Baseline NPS/CSAT/CES thiết lập với sample representative đủ segment quan trọng',core:true},
       {id:'xm3',text:'Tracking cadence được setup và communicated: monthly/quarterly, rõ ai nhận report',core:true},
       {id:'xm4',text:'Driver analysis hoàn thiện: biết yếu tố nào ảnh hưởng mạnh nhất đến score — có statistical backing',core:true},
       {id:'xm5',text:'Churn/Exit research: ≥15 exit interviews + survey — top 3–5 reasons với tần suất cụ thể',core:true},
       {id:'xm6',text:'Segment breakdown bắt buộc: user tier, product type, channel — không chỉ báo cáo aggregate score'},
       {id:'xm7',text:'Dashboard shared, được leadership review định kỳ — action items theo mỗi score change được track'},
     ],
     qual:[
       {id:'xmq1',name:'[1] Đầy đủ tài liệu',desc:'Survey instrument (câu hỏi, scale, logic) được lưu version cụ thể. Raw response data exported và backed up. Dashboard link đính kèm report. Methodology note giải thích cách tính score.'},
       {id:'xmq2',name:'[2] Bám sát Biz Goal & PS',desc:'Metrics được chọn gắn với business outcome cụ thể (retention, LTV, referral). Score change được link với product/service change đã thực hiện — không chỉ báo cáo số mà không có context.'},
       {id:'xmq3',name:'[3] Độ tin cậy dữ liệu',desc:'Sample representative: không chỉ những ai chủ động respond. Response bias được kiểm soát (không survey ngay sau một điểm tiếp xúc tốt/xấu bất thường). Driver analysis có statistical grounding (regression, không chỉ top-of-mind mention).'},
       {id:'xmq4',name:'[4] Tính actionable',desc:'Mỗi score change có owner chịu trách nhiệm action. Top driver được gắn với team/squad cụ thể. Quarterly review: % actions đã complete từ kỳ trước được báo cáo trước khi nhận score mới.'},
       {id:'xmq5',name:'[5] Longitudinal Rigor',desc:'So sánh score theo thời gian có context đầy đủ: product changes, seasonality, macro events. Không interpret score drop/rise mà không xem xét confounding factors. Longitudinal study có control group hoặc before/after design rõ ràng.'},
     ]},

    // ── 6. TỔNG HỢP & TRUYỀN THÔNG INSIGHT ──────────────────
    // Sub-methods: Research synthesis · Insight repository · Stakeholder reporting
    {id:'synthesis',name:'Tổng hợp & truyền thông insight',color:'#6b7588',
     dod:[
       {id:'sy1',text:'Synthesis dùng systematic method: affinity mapping, thematic analysis, hoặc grounded theory — không tóm tắt tuỳ ý',core:true},
       {id:'sy2',text:'Insights được tag, categorized, searchable trong research repository (Notion, Dovetail, Confluence...)',core:true},
       {id:'sy3',text:'Executive summary ≤1 trang: context, key findings, recommendations, suggested next steps',core:true},
       {id:'sy4',text:'Presentation được tailored theo audience: design team ≠ C-level ≠ marketing ≠ CS',core:true},
       {id:'sy5',text:'Action items sau readout: có owner, deadline, priority — được track trong tool quản lý công việc',core:true},
       {id:'sy6',text:'Findings được link với decisions trong product backlog hoặc roadmap — có evidence trail'},
       {id:'sy7',text:'Quarterly impact review: % decisions có research backing được đo và reported lên leadership'},
     ],
     qual:[
       {id:'syq1',name:'[1] Đầy đủ tài liệu',desc:'Tất cả source research (report gốc, raw data location, researcher) được link trong synthesis artifact. Insight repository searchable sau 6 tháng mà không cần hỏi lại researcher. Version history được giữ lại.'},
       {id:'syq2',name:'[2] Bám sát Biz Goal & PS',desc:'Insights được filter theo strategic relevance — không đưa tất cả mọi thứ vào executive summary. Mỗi recommendation link về business priority hiện tại. Không present findings mà leadership không có thẩm quyền/capacity để act.'},
       {id:'syq3',name:'[3] Độ tin cậy dữ liệu',desc:'Không bỏ sót major theme, kể cả insights không confirm hypothesis ban đầu (confirmation bias). Insight được distinguish rõ: "confirmed by ≥3 sources" vs. "emerging signal" vs. "single data point". Không cherry-pick.'},
       {id:'syq4',name:'[4] Tính actionable',desc:'Người không làm research hiểu key insights và biết cần làm gì sau 5 phút đọc executive summary. Action items SMART: specific, measurable, assigned, realistic, time-bound. Không có "recommendation" mà không có owner.'},
       {id:'syq5',name:'[5] Communication Fit',desc:'Format và depth của report match với audience và context (quick readout vs. deep dive). Storytelling rõ ràng: problem → evidence → insight → implication → recommendation. Visual minh hoạ cho data phức tạp.'},
     ]},
  ],
};

let S={projects:[],members:[],filterMember:'',cur:null,view:'dashboard'};
let _detailDirty=false;

async function load(){
  // Load app data from the API when available, otherwise fall back to localStorage.
  try{
    const r=await fetch('/api/data',{credentials:'include'});
    if(!r.ok) throw new Error('load failed');
    const j=await r.json();
    const p=j?.payload||{};
    S.projects=Array.isArray(p.projects)?p.projects:[];
    S.members=Array.isArray(p.members)?p.members:[];
    try{localStorage.setItem('rqi_data_v1',JSON.stringify({payload:{projects:S.projects,members:S.members}}))}catch(e){}
  } catch(e){
    try{
      const raw=localStorage.getItem('rqi_data_v1');
      const j=raw?JSON.parse(raw):null;
      const p=j?.payload||{};
      S.projects=Array.isArray(p.projects)?p.projects:[];
      S.members=Array.isArray(p.members)?p.members:[];
    } catch(e2){
      S.projects=[];S.members=[];
    }
  }
  // Normalize legacy statuses to the new workflow.
  S.projects.forEach(p=>{
    if(p.status==='draft') p.status='open';
    if(p.pending==null) p.pending=false;
    if(p.reviewUpdateCount==null) p.reviewUpdateCount=0;
  });
}

let _saveTimer=null;
async function save(){
  // Persist app data locally; best-effort sync to the API.
  try{localStorage.setItem('rqi_data_v1',JSON.stringify({payload:{projects:S.projects,members:S.members}}))}catch(e){}
  if(_saveTimer) clearTimeout(_saveTimer);
  _saveTimer=setTimeout(async()=>{
    try{
      await fetch('/api/data',{
        method:'PUT',
        headers:{'content-type':'application/json'},
        credentials:'include',
        body:JSON.stringify({payload:{projects:S.projects,members:S.members}})
      });
    } catch(e){}
  },250);
}

function canEditProject(p){
  return !!p && p.status!=='done' && p.status!=='reject';
}

function isPendingProject(p){
  return !!p && p.pending===true;
}
function gd(p){return(GROUPS[p.roleType]||[]).find(g=>g.id===p.groupId)}

// ── GATE SCORE (Trước bàn giao — dùng cho hội đồng) ──────────
// Gate Score = DoD × 60% + Quality Rating × 40%
// Không dùng Adoption Rate vì chưa có data tại thời điểm bàn giao
function gateScore(p){
  const g=gd(p);if(!g)return 0;
  const dodS=g.dod.length?(p.dodChecked||[]).length/g.dod.length:0;
  const rs=Object.values(p.qualRatings||{});
  const qualS=rs.length?rs.reduce((a,b)=>a+b,0)/rs.length/5:0;
  return Math.round((dodS*.6+qualS*.4)*100);
}

// ── FULL RQI (Post-delivery — dùng cho retrospective) ──────
// Full RQI = Gate Score × 70% + Adoption Rate × 30%
function rqi(p){
  const gs=gateScore(p)/100;
  const a=(p.adoptionRate||0)/100;
  return Math.round((gs*.7+a*.3)*100);
}

// ── HARD-BLOCK CONDITIONS ──────────────────────────────────
// Tất cả điều kiện phải pass — không bù trừ nhau
function hardBlocks(p){
  const g=gd(p);
  const blocks=[];
  // 1. Gate Score ≥ 70%
  const gs=gateScore(p);
  if(gs<70) blocks.push({pass:false,label:`Gate Score ${gs}% — cần ≥ 70% để đạt`,critical:true});
  else blocks.push({pass:true,label:`Gate Score ${gs}% ≥ 70% — đạt yêu cầu`});
  // 2. 100% CORE DoD items checked
  if(g){
    const coreItems=g.dod.filter(d=>d.core);
    const checkedCore=coreItems.filter(d=>(p.dodChecked||[]).includes(d.id));
    const allCore=coreItems.length===checkedCore.length;
    if(!allCore) blocks.push({pass:false,label:`CORE DoD: ${checkedCore.length}/${coreItems.length} — phải hoàn thành 100%`,critical:true});
    else blocks.push({pass:true,label:`CORE DoD: ${checkedCore.length}/${coreItems.length} — đã hoàn thành đủ`});
  }
  // 3. Không có Critical quality (1 sao)
  const minRating=Math.min(...Object.values(p.qualRatings||{1:5}));
  const hasCritical=Object.keys(p.qualRatings||{}).length>0 && minRating===1;
  if(hasCritical) blocks.push({pass:false,label:'Có tiêu chí chất lượng được đánh 1 sao — tất cả phải ≥ 2 sao',critical:true});
  else blocks.push({pass:true,label:'Không có tiêu chí chất lượng nào 1 sao'});
  // 4. Gate 1 (Pre-brief) VÀ Gate 3 (Peer Review) phải pass
  const g1=( p.gatesPassed||[]).includes('g1');
  const g3=(p.gatesPassed||[]).includes('g3');
  if(!g1||!g3) blocks.push({pass:false,label:`Cổng review: Briefing trước ${g1?'✓':'✗'} · Phản biện đồng nghiệp ${g3?'✓':'✗'} — bắt buộc cả 2`,critical:true});
  else blocks.push({pass:true,label:'Cổng review: Briefing trước ✓ · Phản biện đồng nghiệp ✓'});
  return blocks;
}

// ── VERDICT ────────────────────────────────────────────────
function verdict(p){
  const gs=gateScore(p);
  const blocks=hardBlocks(p);
  const anyFail=blocks.some(b=>!b.pass);
  if(anyFail) return {key:'block',label:'Bị chặn — Không đủ điều kiện bàn giao',short:'Bị chặn',icon:'⛔',bannerCls:'vb-block',cardCls:'cv-block',color:'var(--red)',desc:'Có ít nhất 1 điều kiện bắt buộc chưa đạt. Cần bổ sung trước khi nộp lên hội đồng.'};
  if(gs>=85) return {key:'pass-hi',label:'Xuất sắc — Bàn giao không điều kiện',short:'Xuất sắc',icon:'✅',bannerCls:'vb-pass-hi',cardCls:'cv-pass-hi',color:'var(--green)',desc:'Chất lượng xuất sắc. Nghiên cứu này có thể dùng làm mẫu tham chiếu cho nhóm.'};
  if(gs>=70) return {key:'pass',label:'Đạt — Đủ điều kiện bàn giao',short:'Đạt',icon:'🟢',bannerCls:'vb-pass',cardCls:'cv-pass',color:'var(--accent)',desc:'Đủ điều kiện bàn giao. Người đánh giá ghi lại 1–2 điểm cần cải thiện cho lần sau (không yêu cầu làm lại).'};
  if(gs>=55) return {key:'cond',label:'Có điều kiện — Cần sửa trước khi bàn giao',short:'Có điều kiện',icon:'⚠️',bannerCls:'vb-cond',cardCls:'cv-cond',color:'var(--amber)',desc:'Gate Score 55–69%. Phải fix các điểm Critical/Major. Hội đồng họp ngắn với researcher trước khi approve.'};
  return {key:'block',label:'Block — Không đủ điều kiện bàn giao',short:'Block',icon:'⛔',bannerCls:'vb-block',cardCls:'cv-block',color:'var(--red)',desc:'Gate Score dưới 55%. Researcher bổ sung và submit lại. Ghi rõ lý do block.'};
}

function dod(p){const g=gd(p);if(!g||!g.dod.length)return 0;return Math.round((p.dodChecked||[]).length/g.dod.length*100)}
function rqiC(s){return s>=75?'var(--green)':s>=60?'var(--accent)':s>=40?'var(--amber)':'var(--red)'}
function rqiG(s){return s>=75?{l:'Excellent',c:'c-green'}:s>=60?{l:'Good',c:'c-accent'}:s>=40?{l:'Warning',c:'c-amber'}:{l:'Critical',c:'c-red'}}
function mb(id){return S.members.find(m=>m.id===id)}
function mc(id){const i=S.members.findIndex(m=>m.id===id);return MCOLORS[i>=0?i%MCOLORS.length:0]}
function mi(id){const m=mb(id);return m?m.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase():'?'}
function av(id,sz=22){const m=mb(id);if(!m)return'';return`<div class="m-av" style="background:${mc(id)};width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.42)}px">${mi(id)}</div>`}
function rt(iso){const d=(Date.now()-new Date(iso))/1000;if(d<60)return'just now';if(d<3600)return Math.floor(d/60)+'m ago';if(d<86400)return Math.floor(d/3600)+'h ago';return Math.floor(d/86400)+'d ago'}
function fps(){
  const visible=S.projects.filter(p=>!isPendingProject(p));
  return S.filterMember?visible.filter(p=>p.ownerId===S.filterMember):visible;
}

function showView(name,btn){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  if(btn)btn.classList.add('active');else{const el=document.getElementById('nav-'+name);if(el)el.classList.add('active')}
  S.view=name;
  if(name==='dashboard')renderDash();
  if(name==='all')renderAll();
  if(name==='compare')renderCompare();
  if(name==='members')renderMembersPage();
  if(name==='glossary')renderGlossary(null,null);
}

function renderMembersPage(){
  const root=document.getElementById('members-content');
  if(!root) return;
  root.innerHTML=`
    <div class="page-header">
      <div class="page-title">Quản lý thành viên</div>
      <div class="page-sub">Danh sách thành viên được lưu lại trên thiết bị (persist qua refresh).</div>
    </div>
    <div class="panel" style="max-width:780px">
      <div class="sec-label" style="margin-bottom:10px">Danh sách</div>
      <div id="members-page-list"></div>
      <div class="sec-label" style="margin:16px 0 10px">Thêm thành viên</div>
      <div class="frow" style="grid-template-columns:1fr 1fr;align-items:end">
        <div class="fg" style="margin-bottom:10px">
          <label class="fl">Tên thành viên *</label>
          <input class="fi" id="pm-name" placeholder="Tên thành viên"/>
        </div>
        <div class="fg" style="margin-bottom:10px">
          <label class="fl">Vai trò</label>
          <input type="hidden" id="pm-role" value="UX/UI Designer"/>
          <div class="role-radios" role="radiogroup" aria-label="Vai trò thành viên">
            <label class="role-radio">
              <input type="radio" name="pm-role-radio" value="UX/UI Designer" checked onchange="setPmRole(this.value)"/>
              <span>UX/UI Designer</span>
            </label>
            <label class="role-radio">
              <input type="radio" name="pm-role-radio" value="Strategic Designer" onchange="setPmRole(this.value)"/>
              <span>Strategic Designer</span>
            </label>
          </div>
        </div>
      </div>
      <div class="m-actions" style="margin-top:14px">
        <button class="btn btn-primary" onclick="addMemberFromPage()">Thêm thành viên</button>
      </div>
    </div>
  `;
  renderMembersPageList();
  setTimeout(()=>document.getElementById('pm-name')?.focus(),50);
}

function renderMembersPageList(){
  const el=document.getElementById('members-page-list');
  if(!el) return;
  el.innerHTML=S.members.length
    ?S.members.map((m,i)=>{const col=MCOLORS[i%MCOLORS.length];const init=m.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();return`<div class="m-row"><div class="m-av" style="background:${col};width:28px;height:28px;font-size:11px">${init}</div><div class="m-name">${m.name}</div><div class="m-role">${m.role||''}</div><button class="btn btn-danger btn-sm btn-icon" onclick="removeMember('${m.id}')">×</button></div>`}).join('')
    :`<div style="font-size:12px;color:var(--text3);padding:8px 0 12px">Chưa có thành viên. Thêm bên dưới.</div>`;
}

function showDetail(id){
  S.cur=S.projects.find(p=>p.id===id);
  if(!S.cur)return;
  _detailDirty=false;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  document.getElementById('view-detail').classList.add('active');
  renderDetail();
}

function markDetailDirty(){
  if(!canEditProject(S.cur)) return;
  _detailDirty=true;
}

function commitDetail(){
  if(!_detailDirty) return;
  if(!S.cur) return;
  // First commit after creating a pending project = "Khởi tạo" (does not count as a review update).
  if(S.cur.pending){
    S.cur.pending=false;
    _detailDirty=false;
    save();
    renderSidebar();
    renderDetail();
    return;
  }
  // Review state: allow at most 4 updates; 5th turns into Reject.
  if(S.cur.status==='review'){
    const n=(S.cur.reviewUpdateCount||0)+1;
    S.cur.reviewUpdateCount=n;
    if(n>4){
      S.cur.status='reject';
    }
  }
  _detailDirty=false;
  save();
  renderSidebar();
  renderDetail();
}

function cancelInit(){
  if(!S.cur || !S.cur.pending) return;
  S.projects=S.projects.filter(p=>p.id!==S.cur.id);
  S.cur=null;
  _detailDirty=false;
  showView('dashboard',document.getElementById('nav-dashboard'));
}

function renderMemberBar(){
  const bar=document.getElementById('member-bar');
  if(!bar) return;
  if(!S.members.length){bar.innerHTML='';return}
  bar.innerHTML=S.members.map((m,i)=>{
    const col=MCOLORS[i%MCOLORS.length];
    const init=m.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    return`<button class="member-chip${S.filterMember===m.id?' active':''}" onclick="toggleFilter('${m.id}')">
      <div class="m-av" style="background:${col};width:18px;height:18px;font-size:14px">${init}</div>${m.name.split(' ')[0]}</button>`;
  }).join('');
}

function toggleFilter(id){
  S.filterMember=S.filterMember===id?'':id;
  renderMemberBar();
  const el=document.getElementById('dash-ctx');
  if(el){const m=mb(S.filterMember);el.textContent=m?m.name:'All members'}
  if(S.view==='dashboard')renderDash();
  if(S.view==='all')renderAll();
}

function renderSidebar(){
  const visible=S.projects.filter(p=>!isPendingProject(p));
  document.getElementById('badge-all').textContent=visible.length;
  const recent=[...visible].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,10);
  document.getElementById('sidebar-list').innerHTML=recent.map(p=>{
    const gs=gateScore(p);const v=verdict(p);const m=mb(p.ownerId);const col=m?mc(p.ownerId):'';const init=m?mi(p.ownerId):'';
    return`<div class="proj-item${S.cur?.id===p.id?' sel':''}" onclick="showDetail('${p.id}')">
      <div class="pj-name">${p.name}</div>
      <div class="pj-row"><span class="pj-type">${p.roleType==='uiux'?'UX/UI':'CHIẾN LƯỢC'}</span><span class="pj-rqi" style="color:${v.color}">${gs}%</span><span style="font-size:14px">${v.icon}</span></div>
      ${m?`<div class="pj-sub"><span class="pj-type">${m.name}</span></div>`:''}
    </div>`;
  }).join('');
}

function projCard(p){
  const gs=gateScore(p);const r=rqi(p);const d=dod(p);const g=gd(p);const col=g?.color||'var(--accent)';
  const v=verdict(p);
  const stC={open:'t-draft',active:'t-active',review:'t-review',done:'t-done',reject:'t-draft'};
  const stL={open:'Open',active:'Active',review:'In Review',done:'Done',reject:'Reject'};
  const m=mb(p.ownerId);const mc2=m?mc(p.ownerId):'';const mi2=m?mi(p.ownerId):'';
  const cc=(p.comments||[]).length;
  return`<div class="proj-card" onclick="showDetail('${p.id}')" style="border-color:${v.key==='block'?'rgba(224,64,79,.25)':v.key==='pass-hi'?'rgba(39,196,126,.2)':''}">
    <div class="card-head">
      <div style="flex:1;min-width:0">
        <div class="card-name">${p.name}</div>
        <div style="display:flex;gap:5px;margin-top:4px;flex-wrap:wrap">
          <span class="tag ${p.roleType==='uiux'?'t-uiux':'t-uxr'}">${p.roleType==='uiux'?'UX/UI':'Chiến lược'}</span>
          <span class="tag ${stC[p.status]||'t-draft'}">${stL[p.status]||p.status}</span>
          <span class="card-verdict ${v.cardCls}">${v.icon} ${v.short}</span>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0;margin-left:10px">
        <div style="font-family:var(--mono);font-size:18px;font-weight:500;color:${v.color}">${gs}%</div>
        <div style="font-size:14px;color:var(--text3);font-family:var(--mono)">Gate</div>
      </div>
    </div>
    <div style="font-size:14px;color:var(--text3);margin:8px 0 6px">${g?.name||''}</div>
    <div class="prog-bar"><div class="prog-fill" style="width:${d}%;background:${col}"></div></div>
    <div class="card-foot">
      <div class="card-meta">DoD ${d}% · RQI ${r}%${cc?` · 💬 ${cc} bình luận`:''}</div>
      <div style="display:flex;align-items:center;gap:6px">${m?`<div class="m-av" style="background:${mc2};width:18px;height:18px;font-size:14px">${mi2}</div>`:''}<div class="card-meta" style="font-family:var(--mono)">${p.startDate||'—'}</div></div>
    </div></div>`;
}

function renderDash(){
  const ps=fps();
  const gss=ps.map(gateScore);const avgGs=gss.length?Math.round(gss.reduce((a,b)=>a+b,0)/gss.length):null;
  const rqis=ps.map(rqi);const avgRqi=rqis.length?Math.round(rqis.reduce((a,b)=>a+b,0)/rqis.length):null;
  const avd=ps.length?Math.round(ps.map(dod).reduce((a,b)=>a+b,0)/ps.length):null;
  const passCount=ps.filter(p=>verdict(p).key!=='block').length;

  const totalEl=document.getElementById('m-total');
  if(totalEl) totalEl.textContent=ps.length;
  const activeEl=document.getElementById('m-active');
  if(activeEl) activeEl.textContent=ps.filter(p=>p.status==='active').length;

  const gsEl=document.getElementById('m-rqi');
  if(avgGs!==null){
    const v=avgGs>=85?'c-green':avgGs>=70?'c-accent':avgGs>=55?'c-amber':'c-red';
    gsEl.textContent=avgGs+'%';gsEl.className='mc-value '+v;
  } else {gsEl.textContent='—';gsEl.className='mc-value';}

  const dodEl=document.getElementById('m-dod');if(avd!==null)dodEl.textContent=avd+'%';else dodEl.textContent='—';

  // update metric labels
  const lbl=document.getElementById('m-rqi-label');if(lbl)lbl.textContent='Gate Score Avg';
  const sub=document.getElementById('m-rqi-sub');if(sub)sub.textContent='Ngưỡng đạt ≥ 70%';
  const passEl=document.getElementById('m-pass');
  if(passEl){passEl.textContent=ps.length?passCount+'/'+ps.length:'—';}

  renderTrend(ps);
  const recent=[...ps].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,6);
  document.getElementById('dash-cards').innerHTML=recent.length?recent.map(projCard).join(''):`<div class="empty" style="grid-column:1/-1"><div class="empty-icon">◈</div><div class="empty-title">Chưa có research nào</div><div class="empty-sub">Tạo research đầu tiên để bắt đầu tracking</div><button class="btn btn-primary" onclick="openNew()">+ New Research</button></div>`;
  renderSidebar();
}

function renderTrend(ps){
  const svg=document.getElementById('trend-svg');const leg=document.getElementById('trend-legend');
  if(!ps.length){svg.innerHTML=`<text x="380" y="65" text-anchor="middle" fill="#44505f" font-size="14" font-family="DM Sans">Chưa có data</text>`;leg.innerHTML='';return}
  const sorted=[...ps].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
  const W=760,H=130,px=24,py=18,n=sorted.length;
  const rqis=sorted.map(rqi),dods=sorted.map(dod);
  function xy(arr,i){const x=n===1?W/2:px+(i/(n-1))*(W-px*2);const y=H-py-(arr[i]/100)*(H-py*2);return[x,y]}
  function path(arr,col,area){
    const pts=arr.map((_,i)=>xy(arr,i));
    const d='M'+pts.map(p=>p.join(',')).join('L');
    if(area){return`<path d="${d}L${pts[pts.length-1][0]},${H-py}L${pts[0][0]},${H-py}Z" fill="${col}" fill-opacity=".07"/>`}
    return`<path d="${d}" fill="none" stroke="${col}" stroke-width="2" stroke-linejoin="round"/>`;
  }
  const t75y=H-py-.75*(H-py*2);
  const dots=sorted.map((_,i)=>{const[x,y]=xy(rqis,i);return`<circle cx="${x}" cy="${y}" r="4" fill="var(--bg2)" stroke="var(--accent)" stroke-width="2"><title>${sorted[i].name}: ${rqis[i]}%</title></circle>`}).join('');
  const dots2=sorted.map((_,i)=>{const[x,y]=xy(dods,i);return`<circle cx="${x}" cy="${y}" r="3" fill="var(--bg2)" stroke="var(--green)" stroke-width="1.5"><title>${sorted[i].name}: DoD ${dods[i]}%</title></circle>`}).join('');
  const lbls=sorted.map((_,i)=>{const[x]=xy(rqis,i);const l=sorted[i].name.slice(0,10)+(sorted[i].name.length>10?'…':'');return`<text x="${x}" y="${H-2}" text-anchor="middle" fill="#44505f" font-size="9" font-family="DM Mono">${l}</text>`}).join('');
  svg.innerHTML=`<line x1="${px}" y1="${t75y}" x2="${W-px}" y2="${t75y}" stroke="var(--green)" stroke-width="1" stroke-dasharray="4,3" opacity=".35"/>
    <text x="${px+2}" y="${t75y-3}" fill="var(--green)" font-size="8" font-family="DM Mono" opacity=".5">75%</text>
    ${path(rqis,'var(--accent)',true)}${path(rqis,'var(--accent)')}${path(dods,'var(--green)')}${dots}${dots2}${lbls}`;
  leg.innerHTML=`<div class="tl-item"><div class="tl-dot" style="background:var(--accent)"></div>Điểm RQI</div><div class="tl-item"><div class="tl-dot" style="background:var(--green)"></div>DoD %</div><div class="tl-item"><div class="tl-dot" style="background:var(--green);opacity:.35"></div>Mục tiêu 75%</div>`;
}

function renderAll(){
  const ty=document.getElementById('f-type')?.value||'';
  const st=document.getElementById('f-status')?.value||'';
  const me=document.getElementById('f-member')?.value||'';
  const fmEl=document.getElementById('f-member');
  if(fmEl){const pv=fmEl.value;fmEl.innerHTML='<option value="">Tất cả thành viên</option>'+S.members.map(m=>`<option value="${m.id}"${m.id===pv?' selected':''}>${m.name}</option>`).join('');fmEl.value=pv}
  const f=S.projects.filter(p=>!isPendingProject(p) && (!ty||p.roleType===ty)&&(!st||p.status===st)&&(!me||p.ownerId===me));
  const sub=document.getElementById('all-sub');if(sub)sub.textContent=`Hiển thị ${f.length} / ${S.projects.length} nghiên cứu`;
  document.getElementById('all-cards').innerHTML=f.length?f.map(projCard).join(''):`<div class="empty" style="grid-column:1/-1"><div class="empty-icon">◫</div><div class="empty-title">Không có kết quả</div><div class="empty-sub">Thử thay đổi filter hoặc tạo research mới</div></div>`;
}

function renderCompare(){
  const opts='<option value="">— Chọn research —</option>'+S.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  ['cmp-a','cmp-b'].forEach(id=>{const el=document.getElementById(id);const cv=el.value;el.innerHTML=opts;if(cv)el.value=cv});
  const idA=document.getElementById('cmp-a').value,idB=document.getElementById('cmp-b').value;
  const body=document.getElementById('compare-body');
  if(!idA||!idB){body.innerHTML=`<div class="empty"><div class="empty-icon">⇄</div><div class="empty-title">Chọn 2 research để so sánh</div></div>`}
  else{const pA=S.projects.find(p=>p.id===idA),pB=S.projects.find(p=>p.id===idB);body.innerHTML=`<div class="cmp-grid">${cmpPanel(pA)}${cmpPanel(pB)}</div>`}
  renderLeaderboard();
}

function cmpPanel(p){
  const gs=gateScore(p);const r=rqi(p);const d=dod(p);const g=gd(p);const v=verdict(p);const adopt=p.adoptionRate||0;
  const rs=Object.values(p.qualRatings||{});const avgQ=rs.length?Math.round(rs.reduce((a,b)=>a+b,0)/rs.length*20):0;
  const gp=(p.gatesPassed||[]).length,cc=(p.comments||[]).length;
  function bar(l,vv,col){return`<div class="cmp-bar-row"><div class="cbr-label">${l}</div><div class="cbr-track"><div class="cbr-fill" style="width:${vv}%;background:${col}"></div></div><div class="cbr-val">${vv}%</div></div>`}
  return`<div class="cmp-panel" style="border-color:${v.key==='block'?'rgba(224,64,79,.3)':v.key==='pass-hi'?'rgba(39,196,126,.2)':''}">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:4px">
      <div style="font-family:var(--head);font-size:13px;font-weight:700;color:${v.color};flex:1;margin-right:10px">${p.name}</div>
      <span class="card-verdict ${v.cardCls}">${v.icon} ${v.short}</span>
    </div>
    <div style="font-size:11px;color:var(--text3);margin-bottom:12px">${g?.name||''} · ${p.roleType==='uiux'?'UX/UI':'Strategic'}</div>
    <div style="display:flex;gap:10px;margin-bottom:12px">
      <div style="text-align:center"><div style="font-family:var(--head);font-size:26px;font-weight:800;color:${v.color}">${gs}%</div><div style="font-size:9px;color:var(--text3);font-family:var(--mono)">Gate Score</div></div>
      <div style="text-align:center"><div style="font-family:var(--head);font-size:26px;font-weight:800;color:${rqiC(r)}">${r}%</div><div style="font-size:9px;color:var(--text3);font-family:var(--mono)">Full RQI</div></div>
    </div>
    ${bar('DoD Score',d,'var(--accent)')}${bar('Adoption',adopt,'var(--green)')}${bar('Quality',avgQ,'var(--amber)')}
    <div style="margin-top:10px;font-size:11px;color:var(--text3)">Cổng: <b style="color:var(--text)">${gp}/3</b> &nbsp;·&nbsp; Comments: <b style="color:var(--text)">${cc}</b></div>
  </div>`;
}

function renderLeaderboard(){
  if(!S.members.length){document.getElementById('leaderboard').innerHTML=`<div style="font-size:12px;color:var(--text3);padding:8px">Chưa có team members. Thêm qua nút 👥.</div>`;return}
  const stats=S.members.map((m,i)=>{const ps=S.projects.filter(p=>p.ownerId===m.id);const gss=ps.map(gateScore);const avg=gss.length?Math.round(gss.reduce((a,b)=>a+b,0)/gss.length):null;const passC=ps.filter(p=>verdict(p).key!=='block').length;return{m,i,cnt:ps.length,avg,passC,col:MCOLORS[i%MCOLORS.length]}}).sort((a,b)=>(b.avg||0)-(a.avg||0));
  document.getElementById('leaderboard').innerHTML=stats.map((s,rank)=>{
    const init=s.m.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    const col=s.avg===null?'var(--text3)':s.avg>=85?'var(--green)':s.avg>=70?'var(--accent)':s.avg>=55?'var(--amber)':'var(--red)';
    return`<div class="lbr-row"><div style="font-family:var(--mono);font-size:11px;color:var(--text3);width:18px">#${rank+1}</div>
      <div class="m-av" style="background:${s.col};width:28px;height:28px;font-size:11px">${init}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:500;color:var(--text)">${s.m.name}</div><div style="font-size:11px;color:var(--text3)">${s.m.role||''} · ${s.cnt} nghiên cứu · ${s.passC} đạt</div></div>
      <div style="text-align:right"><div style="font-family:var(--head);font-size:20px;font-weight:800;color:${col}">${s.avg!==null?s.avg+'%':'—'}</div><div style="font-size:9px;color:var(--text3);font-family:var(--mono)">Gate TB</div></div>
    </div>`;
  }).join('');
}

function renderDetail(){
  const p=S.cur;if(!p)return;
  const canEdit=canEditProject(p);
  const isPending=isPendingProject(p);
  const backAction=canEdit?{label:'Cancel',onclick:'cancelInit()'}:{label:'Quay lại',onclick:"showView('dashboard')"};
  const g=gd(p),gs=gateScore(p),r=rqi(p),d=dod(p),v=verdict(p);
  const stL={open:'Open',active:'Active',review:'In Review',done:'Done',reject:'Reject'};
  const stC={open:'t-draft',active:'t-active',review:'t-review',done:'t-done',reject:'t-draft'};
  const adopt=p.adoptionRate||0;
  const rs=Object.values(p.qualRatings||{});const avgQ=rs.length?Math.round(rs.reduce((a,b)=>a+b,0)/rs.length*20):0;
  const blocks=hardBlocks(p);
  const dodPctCore=g?Math.round(g.dod.filter(x=>x.core&&(p.dodChecked||[]).includes(x.id)).length/Math.max(g.dod.filter(x=>x.core).length,1)*100):0;

  const dodH=(g?.dod||[]).map(item=>{const chk=(p.dodChecked||[]).includes(item.id);return`<div class="dod-item"${canEdit?` onclick="tDod('${item.id}')"`:''}>
    <div class="dod-cb${chk?' chk':''}${item.core?' core':''}"><svg width="8" height="6" viewBox="0 0 8 6"><path d="M1 3L3 5.5L7 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg></div>
    <div class="dod-text${chk?' chk':''}">${item.text}</div>${item.core?'<div class="core-pill">CORE</div>':''}
  </div>`}).join('');

  const qualH=(g?.qual||[]).map(q=>{const rv=(p.qualRatings||{})[q.id]||0;const warn=rv===1?'border-color:rgba(224,64,79,.4);background:rgba(224,64,79,.04)':'';return`<div class="qual-item" style="${warn}"><div class="qual-head"><div class="qual-name">${q.name}${rv===1?' <span style="font-size:9px;color:var(--red)">⚠ Critical</span>':''}</div><div class="stars">${[1,2,3,4,5].map(s=>`<span class="star${s<=rv?' on':''}"${canEdit?` onclick="tStar('${q.id}',${s})"`:''}>★</span>`).join('')}</div></div><div class="qual-desc">${q.desc}</div></div>`}).join('');

  const gateH=GATES.map((gate,i)=>{const pass=(p.gatesPassed||[]).includes(gate.id);const dt=(p.gateDates||{})[gate.id]||'';const required=gate.id==='g1'||gate.id==='g3';return`<div class="gate-item"${canEdit?` onclick="tGate('${gate.id}')"`:''} style="${required&&!pass?'border-color:rgba(224,64,79,.3)':''}"><div class="gate-num${pass?' pass':''}">${pass?'✓':i+1}</div><div class="gate-info"><div class="gate-name">${gate.name}${required?'<span style="font-family:var(--mono);font-size:8px;color:var(--amber);margin-left:5px">BẮT BUỘC</span>':''}</div><div class="gate-desc">${gate.desc}</div></div>${dt?`<div class="gate-date">${dt}</div>`:''}</div>`}).join('');

  function rcBar(l,v2,col,w,note=''){return`<div class="rcr"><div class="rcr-head"><span class="rcr-lbl">${l} ${note?`<span style="font-size:9px;color:var(--text3)">${note}</span>`:''}</span><span class="rcr-val">${v2}% <span style="font-size:9px;color:var(--text3)">×${w}</span></span></div><div class="rcr-track"><div class="rcr-fill" style="width:${v2}%;background:${col}"></div></div></div>`}

  const commH=(p.comments||[]).map(c=>{const cm=mb(c.memberId);const ci=cm?mc(c.memberId):'var(--border2)';const cinit=cm?mi(c.memberId):'?';const tC={review:'ct-review',flag:'ct-flag',note:'ct-note'};const tL={review:'Đánh giá',flag:'Gắn cờ',note:'Ghi chú'};return`<div class="comment"><div class="c-av" style="background:${ci};width:26px;height:26px;font-size:10px">${cinit}</div><div class="c-body"><div class="c-header"><span class="c-author">${cm?.name||'Anonymous'}</span><span class="c-time">${rt(c.createdAt)}</span><span class="c-type ${tC[c.type]||'ct-note'}">${tL[c.type]||c.type}</span></div><div class="c-text">${c.text}</div></div></div>`}).join('');
  const mOpts=S.members.map(m=>`<option value="${m.id}">${m.name}</option>`).join('');

  document.getElementById('detail-content').innerHTML=`
    <div class="dh-nav" style="margin-bottom:14px">
      <button class="btn btn-ghost btn-sm" onclick="${isPending?'cancelInit()':backAction.onclick}">${ICON_CHEVRON_LEFT}${isPending?'Cancel':backAction.label}</button>
      <div class="dh-right">
        <select class="cmp-sel" style="width:120px;font-size:11px" onchange="updStatus(this.value)"${canEdit?'':' disabled'}>${['open','active','review','done','reject'].map(s=>`<option value="${s}"${p.status===s?' selected':''}>${stL[s]}</option>`).join('')}</select>
        <select class="cmp-sel" style="width:130px;font-size:11px" onchange="updOwner(this.value)"${canEdit?'':' disabled'}><option value="">— Unassigned —</option>${S.members.map(m=>`<option value="${m.id}"${p.ownerId===m.id?' selected':''}>${m.name}</option>`).join('')}</select>
      </div>
      ${canEdit?`<button class="btn btn-primary btn-sm dh-commit"${_detailDirty?'':' disabled'} onclick="commitDetail()">${isPending?'Khởi tạo':'Cập nhật'}</button>`:''}
    </div>

    <div style="margin-bottom:6px">
      <div class="detail-title">${p.name}</div>
      <div class="detail-tags" style="margin-top:6px">
        <span class="tag ${p.roleType==='uiux'?'t-uiux':'t-uxr'}">${p.roleType==='uiux'?'Nghiên cứu UX/UI':'Nghiên cứu chiến lược'}</span>
        ${g?`<span class="tag" style="background:rgba(255,255,255,.05);color:var(--text3)">${g.name}</span>`:''}
        <span class="tag ${stC[p.status]||'t-draft'}">${stL[p.status]||p.status}</span>
      </div>
      ${p.objective?`<div class="detail-obj">${p.objective}</div>`:''}
    </div>

    <!-- VERDICT BANNER -->
    <div class="verdict-banner ${v.bannerCls}">
      <div class="verdict-icon">${v.icon}</div>
      <div class="verdict-right">
        <div class="verdict-label">Kết quả đánh giá hội đồng</div>
        <div class="verdict-title" style="color:${v.color}">${v.label}</div>
        <div class="verdict-desc">${v.desc}</div>
      </div>
      <div class="score-cluster">
        <div class="score-box">
          <div class="sb-lbl">Gate Score</div>
          <div class="sb-val" style="color:${v.color}">${gs}%</div>
          <div class="sb-sub">Trước bàn giao</div>
        </div>
        <div class="score-box">
          <div class="sb-lbl">Full RQI</div>
          <div class="sb-val" style="color:${rqiC(r)}">${r}%</div>
          <div class="sb-sub">Gồm tỉ lệ áp dụng</div>
        </div>
      </div>
    </div>

    <div class="detail-body">
      <div class="panel"><div class="panel-title">Tiêu chí hoàn thành (DoD) <span class="ptl"></span><span class="gl-link" onclick="openGlossary('${p.groupId}','${p.roleType}')">Xem giải nghĩa ${ICON_CHEVRON_RIGHT}</span><span style="font-family:var(--mono);font-size:9px;color:var(--text3);margin-left:8px">Core ${dodPctCore}% · All ${d}%</span></div>${dodH}</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="panel"><div class="panel-title">Tiêu chí chất lượng <span class="ptl"></span><span style="font-family:var(--mono);font-size:9px;color:var(--text3)">Avg ${avgQ}%</span></div>${qualH}</div>
        <div class="panel"><div class="panel-title">Cổng kiểm soát <span class="ptl"></span><span style="font-family:var(--mono);font-size:9px;color:var(--text3)">${(p.gatesPassed||[]).length}/ 3 đã qua</span></div>${gateH}</div>
        <div class="panel"><div class="panel-title">Phân tích điểm số <span class="ptl"></span></div>
          <div style="font-size:10px;color:var(--text3);margin-bottom:8px;font-family:var(--mono)">GATE SCORE (trước bàn giao)</div>
          ${rcBar('DoD Score',d,'var(--accent)','.6')}
          ${rcBar('Quality Rating',avgQ,'var(--amber)','.4')}
          <div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin:6px 0">
            <span style="font-size:11px;font-weight:500;color:var(--text)">Gate Score</span>
            <span style="font-family:var(--mono);font-size:13px;font-weight:700;color:${v.color}">${gs}%</span>
          </div>
          <div style="font-size:10px;color:var(--text3);margin:10px 0 8px;font-family:var(--mono)">FULL RQI (sau bàn giao)</div>
          ${rcBar('Gate Score',gs,v.color,'.7')}
          ${rcBar('Adoption Rate',adopt,'var(--green)','.3','(4–6 tuần sau bàn giao)')}
          <div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border);margin:6px 0 10px">
            <span style="font-size:11px;font-weight:500;color:var(--text)">Full RQI</span>
            <span style="font-family:var(--mono);font-size:13px;font-weight:700;color:${rqiC(r)}">${r}%</span>
          </div>
          <div class="adopt-row"><div class="adopt-label">Tỉ lệ áp dụng % <span style="font-size:10px;color:var(--text3)">(nhập sau khi bàn giao)</span></div>
            <input class="adopt-input" type="number" min="0" max="100" value="${adopt}" onchange="tAdopt(this.value)"${canEdit?'':' disabled'}/><span style="font-size:11px;color:var(--text3)">%</span>
          </div>
        </div>
      </div>

      <div class="scoring-row">
        <!-- HARD BLOCK CONDITIONS -->
        <div class="scoring-ref">
          <div class="sr-title">Điều kiện bắt buộc — tất cả phải đạt trước khi bàn giao</div>
          <div class="hard-block-list">
            ${blocks.map(b=>`<div class="hb-item ${b.pass?'hb-ok':''}"><span class="hb-icon">${b.pass?'✓':'✗'}</span><span>${b.label}</span></div>`).join('')}
          </div>
        </div>

        <!-- SCORING REFERENCE -->
        <div class="scoring-ref">
          <div class="sr-title">Bảng quy cách chấm điểm</div>
          <div class="sr-row"><div class="sr-range" style="color:var(--green)">≥ 85%</div><div class="sr-bar" style="background:var(--green);width:85%"></div><div class="sr-lbl" style="color:var(--green)">Xuất sắc — Đạt</div></div>
          <div class="sr-row"><div class="sr-range" style="color:var(--accent)">70–84%</div><div class="sr-bar" style="background:var(--accent);width:70%"></div><div class="sr-lbl" style="color:var(--accent)">Đạt — Có ghi chú</div></div>
          <div class="sr-row"><div class="sr-range" style="color:var(--amber)">55–69%</div><div class="sr-bar" style="background:var(--amber);width:55%"></div><div class="sr-lbl" style="color:var(--amber)">Có điều kiện — Cần sửa</div></div>
          <div class="sr-row"><div class="sr-range" style="color:var(--red)">< 55%</div><div class="sr-bar" style="background:var(--red);width:30%"></div><div class="sr-lbl" style="color:var(--red)">Bị chặn — Nộp lại</div></div>
          <div style="margin-top:8px;font-size:10px;color:var(--text3);line-height:1.6">
            Gate Score = Điểm DoD ×60% + Đánh giá chất lượng ×40% &nbsp;·&nbsp; Full RQI = Gate Score ×70% + Tỉ lệ áp dụng ×30%<br>
            Gate Score dùng cho hội đồng tại thời điểm bàn giao. Full RQI theo dõi hậu kiểm sau 4–6 tuần.
          </div>
        </div>
      </div>

      <div class="panel full-col"><div class="panel-title">Ghi chú nghiên cứu <span class="ptl"></span></div>
        <textarea class="notes-ta" placeholder="Ghi chú, quan sát, điểm tắc nghẽ n, bước tiếp theo..." onchange="tNotes(this.value)"${canEdit?'':' disabled'}>${p.notes||''}</textarea></div>

      <div class="panel full-col"><div class="panel-title">Đánh giá & Bình luận <span class="ptl"></span><span style="font-family:var(--mono);font-size:9px;color:var(--text3)">${(p.comments||[]).length} comments</span></div>
        <div style="margin-bottom:12px">${commH||'<div style="font-size:12px;color:var(--text3);padding:8px 0 10px">Chưa có comment. Thêm đánh giá hoặc gắn cờ vấn đề bên dưới.</div>'}</div>
        <div class="c-input-row">
          <select class="c-type-sel" id="c-type"${canEdit?'':' disabled'}><option value="note">Ghi chú</option><option value="review">Đánh giá</option><option value="flag">Gắn cờ vấn đề</option></select>
          <select class="c-type-sel" id="c-member"${canEdit?'':' disabled'}><option value="">Anonymous</option>${mOpts}</select>
          <textarea class="c-ta" id="c-ta" placeholder="Thêm đánh giá, quan sát, hoặc gắn cờ vấn đề..."${canEdit?'':' disabled'}></textarea>
          <button class="btn btn-primary btn-sm" style="align-self:flex-end" onclick="addComment()"${canEdit?'':' disabled'}>Send</button>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:flex-end;padding-top:4px">
      <button class="btn btn-danger btn-sm" onclick="delProject()">Xóa nghiên cứu</button>
    </div>`;
  renderSidebar();
}

function tDod(id){const p=S.cur;if(!canEditProject(p))return;p.dodChecked=p.dodChecked||[];const i=p.dodChecked.indexOf(id);if(i>-1)p.dodChecked.splice(i,1);else p.dodChecked.push(id);markDetailDirty();renderDetail()}
function tStar(qid,s){const p=S.cur;if(!canEditProject(p))return;p.qualRatings=p.qualRatings||{};p.qualRatings[qid]=s;markDetailDirty();renderDetail()}
function tGate(gid){const p=S.cur;if(!canEditProject(p))return;p.gatesPassed=p.gatesPassed||[];p.gateDates=p.gateDates||{};const i=p.gatesPassed.indexOf(gid);if(i>-1){p.gatesPassed.splice(i,1);delete p.gateDates[gid]}else{p.gatesPassed.push(gid);p.gateDates[gid]=new Date().toLocaleDateString('vi-VN')};markDetailDirty();renderDetail()}
function tAdopt(v){const p=S.cur;if(!canEditProject(p))return;p.adoptionRate=Math.max(0,Math.min(100,parseInt(v)||0));markDetailDirty();renderDetail()}
function tNotes(v){const p=S.cur;if(!canEditProject(p))return;p.notes=v;markDetailDirty()}
function updStatus(v){const p=S.cur;if(!canEditProject(p))return;p.status=v;markDetailDirty();renderSidebar()}
function updOwner(v){const p=S.cur;if(!canEditProject(p))return;p.ownerId=v;markDetailDirty();renderSidebar()}
function addComment(){
  const p=S.cur;if(!p)return;
  if(!canEditProject(p)) return;
  const text=document.getElementById('c-ta')?.value?.trim();if(!text)return;
  p.comments=p.comments||[];
  p.comments.push({id:'c'+Date.now(),text,type:document.getElementById('c-type')?.value||'note',memberId:document.getElementById('c-member')?.value||'',createdAt:new Date().toISOString()});
  markDetailDirty();renderDetail();
}
function delProject(){
  if(!confirm('Xóa nghiên cứu này? Hành động không thể hoàn tác.'))return;
  S.projects=S.projects.filter(p=>p.id!==S.cur?.id);S.cur=null;save();
  showView('dashboard',document.getElementById('nav-dashboard'));
}

function openNew(){
  document.getElementById('fn-name').value='';document.getElementById('fn-role').value='uiux';
  document.querySelectorAll('input[name="fn-role-radio"]').forEach(r=>r.checked = r.value === 'uiux');
  document.getElementById('fn-status').value='open';document.getElementById('fn-date').value=new Date().toISOString().split('T')[0];
  document.getElementById('fn-obj').value='';syncGroups();
  document.getElementById('fn-owner').innerHTML='<option value="">— Unassigned —</option>'+S.members.map(m=>`<option value="${m.id}">${m.name}</option>`).join('');
  document.getElementById('modal-new').classList.add('open');
  setTimeout(()=>document.getElementById('fn-name').focus(),50);
}
function syncGroups(){const r=document.getElementById('fn-role').value;document.getElementById('fn-group').innerHTML=(GROUPS[r]||[]).map(g=>`<option value="${g.id}">${g.name}</option>`).join('')}

function setFnRole(roleType){
  const el=document.getElementById('fn-role');
  if(!el) return;
  el.value=roleType;
  syncGroups();
}
function createProject(){
  const name=document.getElementById('fn-name').value.trim();if(!name){document.getElementById('fn-name').focus();return}
  const p={id:'p'+Date.now(),pending:true,reviewUpdateCount:0,name,roleType:document.getElementById('fn-role').value,groupId:document.getElementById('fn-group').value,status:document.getElementById('fn-status').value,startDate:document.getElementById('fn-date').value,ownerId:document.getElementById('fn-owner').value,objective:document.getElementById('fn-obj').value.trim(),dodChecked:[],qualRatings:{},gatesPassed:[],gateDates:{},adoptionRate:0,notes:'',comments:[],createdAt:new Date().toISOString()};
  S.projects.unshift(p);
  closeModals();
  S.cur=p;
  _detailDirty=true;
  showDetail(p.id);
}

function openMembers(){renderMembersModal();document.getElementById('modal-members').classList.add('open')}
function renderMembersModal(){
  document.getElementById('member-list-ui').innerHTML=S.members.length
    ?S.members.map((m,i)=>{const col=MCOLORS[i%MCOLORS.length];const init=m.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();return`<div class="m-row"><div class="m-av" style="background:${col};width:28px;height:28px;font-size:11px">${init}</div><div class="m-name">${m.name}</div><div class="m-role">${m.role||''}</div><button class="btn btn-danger btn-sm btn-icon" onclick="removeMember('${m.id}')">×</button></div>`}).join('')
    :`<div style="font-size:12px;color:var(--text3);padding:8px 0 12px">Chưa có thành viên. Thêm bên dưới.</div>`;
}
function addMember(){const name=document.getElementById('nm-name').value.trim();if(!name)return;S.members.push({id:'m'+Date.now(),name,role:document.getElementById('nm-role').value.trim()});document.getElementById('nm-name').value='';document.getElementById('nm-role').value='UX/UI Designer';document.querySelectorAll('input[name="nm-role-radio"]').forEach(r=>r.checked = r.value === 'UX/UI Designer');save();renderMembersModal();renderMemberBar()}
function removeMember(id){
  if(!confirm('Xóa thành viên này?'))return;
  S.members=S.members.filter(m=>m.id!==id);
  save();
  renderMembersModal();
  renderMembersPageList();
  renderMemberBar();
  renderSidebar();
}

function addMemberFromPage(){
  const name=document.getElementById('pm-name')?.value?.trim();
  if(!name) return;
  const role=document.getElementById('pm-role')?.value?.trim()||'';
  S.members.push({id:'m'+Date.now(),name,role});
  document.getElementById('pm-name').value='';
  document.getElementById('pm-role').value='UX/UI Designer';
  document.querySelectorAll('input[name="pm-role-radio"]').forEach(r=>r.checked = r.value === 'UX/UI Designer');
  save();
  renderMembersPageList();
  renderMemberBar();
  if(S.view==='members') renderSidebar();
}

function setNmRole(roleLabel){
  const el=document.getElementById('nm-role');
  if(!el) return;
  el.value=roleLabel;
}

function setPmRole(roleLabel){
  const el=document.getElementById('pm-role');
  if(!el) return;
  el.value=roleLabel;
}

function exportJSON(){
  const data={projects:S.projects.map(p=>({...p,_rqi:rqi(p),_dod:dod(p)})),members:S.members,exportedAt:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`rqi-export-${new Date().toISOString().split('T')[0]}.json`;a.click();URL.revokeObjectURL(url);
}
function exportCSV(){
  const rows=[['Name','Role','Group','Status','Owner','RQI%','DoD%','Adoption%','Gates','Comments','Start','Created']];
  S.projects.forEach(p=>{const g=gd(p);const m=mb(p.ownerId);rows.push([`"${p.name}"`,p.roleType,g?.name||p.groupId,p.status,m?.name||'',rqi(p),dod(p),p.adoptionRate||0,(p.gatesPassed||[]).length,(p.comments||[]).length,p.startDate||'',p.createdAt.split('T')[0]])});
  const csv=rows.map(r=>r.join(',')).join('\n');const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`rqi-export-${new Date().toISOString().split('T')[0]}.csv`;a.click();URL.revokeObjectURL(url);
}
function openImport(){document.getElementById('import-ta').value='';document.getElementById('modal-import').classList.add('open')}
function doImport(){
  try{
    const raw=JSON.parse(document.getElementById('import-ta').value.trim());
    const inc=Array.isArray(raw)?raw:(raw.projects||[]);const mems=raw.members||[];
    let added=0;const eids=new Set(S.projects.map(p=>p.id));
    inc.forEach(p=>{if(!eids.has(p.id)){S.projects.push(p);added++}});
    const emids=new Set(S.members.map(m=>m.id));mems.forEach(m=>{if(!emids.has(m.id))S.members.push(m)});
    save();closeModals();renderDash();renderMemberBar();alert(`Đã nhập ${added} nghiên cứu thành công.`);
  }catch(e){alert('JSON không hợp lệ. Vui lòng kiểm tra lại.')}
}

function closeModals(){document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('open'))}
document.querySelectorAll('.modal-overlay').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)closeModals()}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModals()});

const DOD_GLOSSARY={
  'user-research':[
    {id:'ur1',
     why:'Gate đầu tiên ngăn team đi field với câu hỏi sai hoặc sample sai. Trong môi trường tài chính, field sai một vòng tốn 2–3 tuần và không có kết quả dùng được.',
     steps:[
       {k:'Objective',v:'Viết 1–3 câu hỏi research cụ thể. VD: "Người dùng lần đầu mở tài khoản gặp friction ở bước nào?" — không phải "tìm hiểu hành vi người dùng" chung chung.'},
       {k:'Methodology',v:'Xác định rõ phương pháp: usability test / in-depth interview / contextual inquiry / diary study — mỗi loại có protocol khác nhau.'},
       {k:'Screener',v:'Tiêu chí chọn người tham gia: độ tuổi, hành vi tài chính, mức độ quen thuộc với app, có/không có sản phẩm đang test.'},
       {k:'Sample size',v:'Số lượng tối thiểu tính trước — không phải "đủ thì dừng". Qualitative ≥6, survey ≥50.'},
       {k:'Timeline',v:'Ngày field, ngày synthesis, ngày deliver report — stakeholder biết để plan.'},
     ],
     fail:'Không có approve bằng văn bản (comment Notion/email) từ Lead researcher + PM trước khi field.'},
    {id:'ur2',
     why:'Findings không có raw data backing = không có giá trị tranh luận. Khi Legal/Compliance hỏi "tại sao bạn nói người dùng không hiểu điều khoản này?" — bạn cần recording cụ thể để dẫn chứng.',
     steps:[
       {k:'Recording',v:'Video/audio mỗi session, đặt tên file: [ngày]_[participant-ID]. Lưu cloud, không chỉ trên máy cá nhân.'},
       {k:'Transcript',v:'Không cần transcribe 100% word-by-word, nhưng cần timestamped notes — "08:32 — user nói tôi không biết số này là gì" là đủ.'},
       {k:'Observation notes',v:'Ghi hành vi quan sát được trong lúc field, tách biệt với interpretation. "User dừng lại 15 giây ở màn xác nhận" ≠ "User confused".'},
       {k:'Survey response',v:'Export raw CSV từ Google Form/Typeform — không chỉ giữ dashboard aggregate. Mất raw data sau 3 tháng là mất hết khả năng reanalysis.'},
     ],
     fail:'Chỉ có notes tóm tắt sau session mà không có recording hoặc transcript — đây là item fail thường gặp nhất.'},
    {id:'ur3',
     why:'Sample quá nhỏ hoặc quá đồng nhất khiến findings không generalize được. Đây là nguồn gốc của phần lớn insight sai trong UX research.',
     steps:[
       {k:'≥6 user/qualitative',v:'Dựa trên Nielsen\'s rule: 5 user phát hiện ~85% usability issues. 6 là ngưỡng tối thiểu an toàn cho một round.'},
       {k:'≥50 response/survey',v:'Ngưỡng để có meaningful pattern trong data định lượng. Dưới 50 thì segment breakdown không có ý nghĩa thống kê.'},
       {k:'Đủ segment define trước',v:'Phải xác định segment nào cần cover TRƯỚC khi recruit — không phải sau khi phỏng vấn xong rồi nhận ra thiếu nhóm. Với sản phẩm tài chính: thường cần low/high financial literacy, cả user mới/cũ.'},
     ],
     fail:'"Diversity" lấy người ngẫu nhiên thay vì đảm bảo đủ segments quan trọng với câu hỏi research.'},
    {id:'ur4',
     why:'Tóm tắt sau session không phải synthesis. Synthesis là quá trình có hệ thống tìm pattern xuyên suốt nhiều nguồn data, tránh researcher chỉ nhớ session cuối cùng hoặc ấn tượng nhất.',
     steps:[
       {k:'Affinity Map',v:'Viết mỗi observation thành sticky note riêng biệt, sau đó nhóm theo pattern nổi lên — KHÔNG nhóm theo câu hỏi interview (đây là lỗi phổ biến).'},
       {k:'Thematic analysis',v:'Đặt tên cho mỗi theme sau khi nhóm — theme phải là insight, không phải topic. "Người dùng sợ mất tiền khi thao tác sai" là insight; "Cảm xúc khi dùng app" chỉ là topic.'},
       {k:'Evidence link',v:'Mỗi insight phải dẫn về ≥2 quote hoặc observation cụ thể. VD: "User P3 nói \'…\', User P6 dừng lại 20 giây tại màn hình X".'},
     ],
     fail:'Synthesis chỉ là bullet point list tóm tắt từng session theo thứ tự thời gian — đây không phải thematic analysis.'},
    {id:'ur5',
     why:'Cấu trúc 4 phần đảm bảo người đọc có đủ context để đánh giá độ tin cậy của findings, không phải tin vào kết luận blindly. Link raw evidence là cam kết về traceability.',
     steps:[
       {k:'Objective',v:'Câu hỏi research ban đầu và bối cảnh tại sao cần nghiên cứu — người mới đọc phải hiểu được.'},
       {k:'Method',v:'Methodology, sample size, screener criteria, ngày field, tool dùng — đủ để peer review đánh giá methodology.'},
       {k:'Findings',v:'Insights có evidence, sắp xếp theo mức độ quan trọng — KHÔNG liệt kê theo thứ tự session.'},
       {k:'Recommendations',v:'Gắn với feature/flow cụ thể, có priority. Không viết "cải thiện UX" — viết "redesign bước xác nhận giao dịch do 4/6 user không hiểu số tiền đang thực hiện".'},
       {k:'Link raw evidence',v:'Mỗi finding quan trọng có hyperlink về timestamp recording hoặc quote trong transcript. Không viết "theo như chúng tôi quan sát được".'},
     ],
     fail:'Report không có phần Method (người đọc không thể đánh giá độ tin cậy) hoặc không có phần Recommendations (report xong không ai biết làm gì tiếp theo).'},
    {id:'ur6',
     why:'Finding chỉ có 1 nguồn là anecdote, không phải pattern. Với sản phẩm tài chính, finding một user mà đưa vào recommendation có thể dẫn đến quyết định sai tốn kém.',
     steps:[
       {k:'≥2 independent sources',v:'2 user nói/làm điều tương tự, hoặc 1 user + 1 analytics data point. Nguồn phải độc lập — không phải cùng 1 session.'},
       {k:'Label "emerging signal"',v:'Finding có 1 nguồn vẫn được report, nhưng phải label rõ là "emerging signal — cần validate thêm" thay vì present ngang hàng với confirmed finding.'},
       {k:'Không có finding chung chung',v:'VD không chấp nhận: "người dùng cảm thấy khó hiểu". VD chấp nhận: "4/6 user không đọc được chữ nhỏ trên màn xác nhận (timestamp 3:42, 7:15, 12:03, 18:44)".'},
     ],
     fail:'Report có finding kiểu "một số người dùng phản ánh rằng…" mà không có số lượng cụ thể và quote dẫn chứng.'},
    {id:'ur7',
     why:'Research xong mà không present = findings chết trong folder. Present xong không có action items = meeting cho có. Item này đo research có tạo ra impact thực không.',
     steps:[
       {k:'Present',v:'Không bắt buộc meeting lớn — async Loom video + comment thread chấp nhận được, miễn là team đã đọc và acknowledge.'},
       {k:'Action items',v:'Sau readout phải có danh sách: Feature X cần redesign — owner: [tên designer] — target: Sprint 24. Không chỉ nói "team sẽ xem xét".'},
       {k:'Track sau 4 tuần',v:'Quay lại kiểm tra % action items đã thực hiện — đây là Adoption Rate input cho Full RQI. Nếu 0% được thực hiện, research chưa có giá trị thực tế.'},
     ],
     fail:'Present xong, mọi người nói "interesting" và không ai làm gì. Hoặc không có record nào chứng minh findings đã được share với team.'},
  ],
  'data-analytics':[
    {id:'da1',why:'Tracking plan là hợp đồng giữa researcher và engineering về những gì cần đo. Không có plan = mỗi người hiểu event theo cách khác nhau = data không thể so sánh giữa các thời điểm.',steps:[{k:'Event name',v:'Tên theo convention chuẩn (snake_case). VD: button_checkout_clicked thay vì "click nút thanh toán".'},{k:'Properties',v:'Các thuộc tính đi kèm event: user_id, screen_name, amount, product_type.'},{k:'Trigger',v:'Điều kiện chính xác nào kích hoạt event — click, page load, hay sau 5 giây dừng?'},{k:'Owner',v:'Ai chịu trách nhiệm implement và maintain tracking này.'}],fail:'Event được implement mà không có tracking plan document — 3 tháng sau không ai nhớ event này đo cái gì.'},
    {id:'da2',why:'So sánh "trước/sau" mà không có baseline được đo cùng methodology = không có ý nghĩa thống kê. Đây là sai lầm phổ biến nhất trong analytics report.',steps:[{k:'Baseline trước test',v:'Đo metric trong ít nhất 2 tuần trước khi thay đổi bất cứ thứ gì. Lưu lại ngày bắt đầu đo.'},{k:'Không đo ngược',v:'Không được lấy data từ trước khi có baseline rồi gọi là "trước thay đổi" — data đó không được thu thập với cùng tracking setup.'},{k:'Document baseline',v:'Số baseline cụ thể được ghi vào research plan với ngày và methodology — không phải số nhớ trong đầu.'}],fail:'Report so sánh với "tháng trước" mà tracking tháng trước không đồng nhất với tracking hiện tại.'},
    {id:'da3',why:'A/B test không có power analysis trước là "testing for luck" — sample size không đủ thì winner/loser đều không có ý nghĩa thống kê, nhưng team vẫn nghĩ kết luận được.',steps:[{k:'Hypothesis format',v:'"Nếu [thay đổi X] thì [metric Y] sẽ [tăng/giảm Z%] vì [lý do]". VD: "Nếu đổi nút CTA từ xám sang xanh thì CTR sẽ tăng ≥15% vì xanh có contrast cao hơn với background."'},{k:'Power analysis',v:'Tính sample size cần thiết trên tool (như Evan Miller calculator) TRƯỚC khi chạy. Input: baseline rate, minimum detectable effect, α=0.05, power=80%.'},{k:'Chỉ 1 biến',v:'Mỗi test chỉ thay đổi 1 thứ. Nếu đổi cả màu + text + vị trí = không biết cái nào tạo ra thay đổi.'}],fail:'Dừng test khi "thấy kết quả tốt rồi" thay vì chờ đủ sample size đã tính trước — đây là peeking problem, tăng false positive rate.'},
    {id:'da4',why:'Heatmap ít traffic và funnel thiếu bước đều cho kết luận sai — analyst nhìn vào "chỗ nóng nhất" mà không biết đó là noise hay signal thật.',steps:[{k:'≥1,000 sessions cho heatmap',v:'Dưới ngưỡng này, pattern trên heatmap là statistical noise. Với trang có ít traffic, cần accumulate data lâu hơn.'},{k:'Funnel đủ bước',v:'Map từ acquisition (đầu vào) → activation (hành động có giá trị đầu tiên) → retention (quay lại). Không bỏ bước giữa vì sẽ không thấy được drop-off thật.'}],fail:'Funnel chỉ đo 2 bước đầu và cuối — không biết user rớt ở bước nào trong giữa.'},
    {id:'da5',why:'Kết luận winner/loser khi p>0.05 là false positive — team làm theo kết quả sai, tốn công develop một thay đổi không có hiệu quả thực.',steps:[{k:'p<0.05',v:'Xác suất kết quả xảy ra ngẫu nhiên <5%. Đây là ngưỡng tối thiểu chấp nhận được, không phải "đẹp thì pass".'},{k:'Confidence interval',v:'Report CI 95%, không chỉ report p-value. CI=[+3%,+28%] thì uplift khá không chắc chắn; CI=[+12%,+18%] thì uplift ổn định.'},{k:'Primary + Guardrail',v:'Win primary metric (VD: conversion) không đủ nếu guardrail metric (VD: revenue per transaction) drop đáng kể.'}],fail:'Dừng test trước khi đạt p<0.05 rồi report kết quả như thật vì deadline sprint.'},
    {id:'da6',why:'Aggregate data ẩn đi những gì thực sự xảy ra. Mobile user và desktop user thường có hành vi hoàn toàn khác nhau — gộp chung thì miss cả hai.',steps:[{k:'Mobile vs Desktop',v:'Đặc biệt quan trọng với sản phẩm tài chính — flow mobile thường ngắn hơn, nhiều friction hơn.'},{k:'New vs Returning',v:'New user thường bị friction ở onboarding; returning user bị friction ở feature nâng cao. Gộp chung = không xử lý được cả hai.'},{k:'User tier / Product type',v:'Người dùng vay vs gửi vs đầu tư có hành vi khác nhau hoàn toàn. Segment breakdown theo product type là bắt buộc với sản phẩm tài chính đa dịch vụ.'}],fail:'Report chỉ có aggregate number, không có segment breakdown — team không biết vấn đề xảy ra với ai.'},
    {id:'da7',why:'Knowledge từ mỗi test phải được archive để không ai phải test lại điều team đã biết 6 tháng trước.',steps:[{k:'Decision document',v:'Ghi rõ: hypothesis → result → decision (launch/rollback/iterate) → confidence level.'},{k:'Learning archive',v:'Một đoạn tóm tắt "what we learned" được lưu trong research repository với tag searchable. VD: "Green CTA không có impact trên mobile — đã test Q3/2024".'}],fail:'Test kết thúc, winner được launch, nhưng không ai document lại. 6 tháng sau team test lại điều tương tự.'},
  ],
  'market-ux':[
    {id:'mu1',why:'Chỉ phân tích 2–3 đối thủ quen thuộc = miss emerging competitor đang disrupt thị trường từ phía không ngờ tới.',steps:[{k:'Direct',v:'Sản phẩm tài chính cùng loại, cùng target segment.'},{k:'Indirect',v:'Sản phẩm khác loại nhưng giải quyết cùng job-to-be-done. VD: ví điện tử vs ngân hàng truyền thống.'},{k:'Substitute',v:'Giải pháp thay thế hoàn toàn khác: giữ tiền mặt, nhờ người thân, v.v.'},{k:'Emerging disruptors',v:'Startup đang fundraising, product đang beta — họ chưa có thị phần nhưng định hình expectation của user.'}],fail:'Danh sách competitor chỉ có tên quen thuộc — không có emerging player.'},
    {id:'mu2',why:'Audit dựa trên recall của researcher là audit ý kiến, không phải audit evidence. Screenshot aged có thể dùng lại để training team sau.',steps:[{k:'Screenshot',v:'Chụp từng screen quan trọng với ngày timestamp. Lưu theo tên đối thủ + feature + ngày.'},{k:'Recording',v:'Screen record flow quan trọng — dễ share với team hơn 20 screenshot rời.'},{k:'Heuristic checklist',v:'Dùng checklist Nielsen 10 heuristics cho mỗi đối thủ — đánh giá trên cùng rubric, không phải cảm nhận chủ quan.'}],fail:'Audit note viết sau khi dùng app xong mà không có screenshot — 2 tuần sau không reproduce được.'},
    {id:'mu3',why:'Framework chuẩn đảm bảo audit có thể so sánh được giữa các đối thủ và có thể repeat theo thời gian.',steps:[{k:'Heuristic evaluation',v:'Nielsen\'s 10 heuristics: visibility of system status, match real world, user control, consistency, error prevention, recognition over recall, flexibility, aesthetic, error recovery, help docs. Rate 0–4 severity cho mỗi heuristic.'},{k:'Feature matrix',v:'Bảng rows = features, columns = competitors. Tick/cross/partial. Dễ nhìn ra gap.'}],fail:'Audit chỉ viết prose "app của X trông đẹp hơn, UX của Y confusing hơn" mà không có rubric cụ thể.'},
    {id:'mu4',why:'Positioning map buộc team phải quyết định 2 trục quan trọng nhất — quá trình này thường reveal nhiều insights hơn cả kết quả cuối.',steps:[{k:'Trục có ý nghĩa chiến lược',v:'VD: "Chi phí sử dụng" vs "Mức độ phức tạp tính năng". Không dùng trục chung chung như "tốt" vs "xấu".'},{k:'Whitespace',v:'Vùng trên map không có đối thủ = opportunity. Nhưng cần kiểm tra: whitespace đó có ai chưa? Hay không ai vào vì không có demand?'}],fail:'Positioning map có trục quá chung chung không dẫn đến strategic insight nào.'},
    {id:'mu5',why:'Opportunity không gắn với feature cụ thể = không ai biết làm gì với thông tin đó.',steps:[{k:'≥3 opportunities cụ thể',v:'VD: "Tất cả đối thủ đều yêu cầu upload CCCD để xem lãi suất — cơ hội: show lãi suất trước, verify sau để giảm friction đầu funnel."'},{k:'Link vào backlog',v:'Mỗi opportunity có 1 issue/ticket trong backlog với owner. Không phải chỉ nằm trong slide.'}],fail:'Section "Opportunities" trong report chỉ có 3 bullet points chung chung như "cần cải thiện onboarding".'},
    {id:'mu6',why:'Research xong không link vào backlog = thông tin tốt nhưng không tạo ra thay đổi.',steps:[{k:'Link + owner',v:'Mỗi finding quan trọng phải có 1 Jira/Linear ticket với owner và target sprint.'},{k:'Design backlog',v:'Không nhất thiết phải fix ngay — nhưng phải được acknowledge và prioritized.'}],fail:'Findings nằm trong slide, không có ticket nào được tạo ra sau presentation.'},
  ],
  'strategic':[
    {id:'st1',why:'Research không align với business goal = researcher làm việc cho research, không cho công ty. Stakeholder sign-off trước field ngăn tình huống "nghiên cứu xong rồi không dùng được".',steps:[{k:'OKR/business problem link',v:'Ghi rõ research này phục vụ OKR nào, hoặc giúp đưa ra business decision nào. VD: "Research này giúp quyết định có nên launch sản phẩm X cho segment Y không."'},{k:'Stakeholder sign-off',v:'PM, Business Lead, và Research Lead phải approve research plan trước khi field. Comment Notion/email là đủ — không cần họp riêng.'}],fail:'Research brief không có explicit link về OKR hay business decision — researcher tự define scope.'},
    {id:'st2',why:'Strategic research cần volume đủ để validate segmentation hypothesis. 12 interviews là ngưỡng tối thiểu để thấy pattern ổn định.',steps:[{k:'≥12 interviews',v:'Cho strategic research — nhiều hơn usability test vì cần validate behavioral pattern, không chỉ usability issue.'},{k:'Đa dạng segment',v:'Không phải 12 người giống nhau. Cần cover các nhóm segment đang được hypothesis về.'},{k:'Raw data',v:'Recording + transcript bắt buộc — strategic insights thường được question lại bởi leadership, cần evidence để defend.'}],fail:'12 interviews nhưng tất cả từ cùng 1 segment — không validate được segmentation hypothesis.'},
    {id:'st3',why:'JTBD framework buộc researcher đào sâu hơn "user muốn feature X" để hiểu "tại sao user cần điều đó trong cuộc sống của họ".',steps:[{k:'Core job',v:'Việc thực sự user cần làm. VD: "Đảm bảo tiền vẫn đó khi cần" — không phải "muốn dùng app tiết kiệm".'},{k:'Desired outcomes',v:'Metric user dùng để đánh giá xem core job có được done tốt không. VD: "Không mất tiền do quên rút", "Biết chính xác mình có bao nhiêu".'},{k:'Constraints',v:'Những gì ngăn cản user đạt desired outcome. VD: "Phải ra ngân hàng mới rút được", "Không hiểu lãi suất tính thế nào".'},{k:'User evidence',v:'≥2 user quote cụ thể cho mỗi job. Không phải JTBD từ brainstorm nội bộ.'}],fail:'JTBD framework được fill bằng assumption của team, không phải từ interview data.'},
    {id:'st4',why:'Qualitative interviews rất dễ bị biased — chọn người phù hợp với hypothesis. Validate bằng quant data là bước kiểm tra tính đại diện.',steps:[{k:'Survey ≥100 response',v:'Đủ để phân tích theo segment và có statistical significance cơ bản.'},{k:'Analytics data',v:'Behavioral data từ product analytics — người dùng thực sự làm gì, không phải họ nghĩ họ làm gì.'},{k:'Match với qual',v:'Nếu quant không confirm qual insights = cần thêm vòng research, không được bỏ qua sự mâu thuẫn.'}],fail:'Segmentation chỉ dựa trên qual interviews, không có quant validation — segment có thể chỉ tồn tại trong sample nhỏ.'},
    {id:'st5',why:'Systematic synthesis ngăn researcher "tóm tắt theo ấn tượng" — tức là nhớ session cuối cùng hoặc session ấn tượng nhất nhiều hơn những session còn lại.',steps:[{k:'Affinity mapping',v:'Mỗi observation = 1 note. Nhóm bottom-up, không nhóm theo câu hỏi guide.'},{k:'Thematic analysis',v:'Tên theme là insight, không phải topic. Mỗi theme có supporting evidence từ ≥2 independent sources.'},{k:'Grounded theory',v:'Cho research khám phá: để theme emerge từ data, không bắt đầu với framework áp đặt.'}],fail:'Synthesis chỉ là slide deck tóm tắt từng interview theo thứ tự thời gian.'},
    {id:'st6',why:'Present với Q&A buộc researcher test xem insights có thuyết phục được người skeptical nhất trong room không — đây là peer review tốt nhất.',steps:[{k:'Q&A session',v:'Không chỉ present rồi về. Cho leadership hỏi và ghi lại questions — câu hỏi nào không trả lời được = gap cần address.'},{k:'Feedback ghi nhận',v:'Note lại concerns của stakeholder. Nếu leadership không đồng ý với framing = research chưa done, cần vòng clarification.'}],fail:'Chỉ send slide qua email, không có session live để Q&A.'},
    {id:'st7',why:'"Findings" không phải roadmap implication. Research phải translate thành "team nên làm gì trong 6 tháng tới và tại sao".',steps:[{k:'"Làm X vì Y"',v:'Không phải "Có thể xem xét X". Phải là recommendation rõ ràng với rationale gắn về evidence từ research.'},{k:'Timeline cụ thể',v:'"Trong 6 tháng tới" hoặc "trong Q2" — không phải "trong tương lai gần". Strategic research có giá trị theo window planning cycle của công ty.'}],fail:'Report kết thúc bằng 10 findings nhưng không có 1 recommendation rõ ràng nào về việc phải làm gì.'},
  ],
  'cx-journey':[
    {id:'cx1',why:'Journey map thiếu giai đoạn thường bỏ sót Advocacy (word-of-mouth, referral) — đây là touchpoint quan trọng nhất với sản phẩm tài chính.',steps:[{k:'Awareness → Consideration',v:'Người dùng biết đến sản phẩm qua đâu? Kênh nào drive intent mạnh nhất?'},{k:'Purchase / Onboarding',v:'Friction trong quá trình đăng ký, verify, kích hoạt — đây thường là nơi drop-off lớn nhất.'},{k:'Use (daily/recurring)',v:'Hành vi sử dụng thực tế, habit loop, pain point khi dùng thường xuyên.'},{k:'Advocacy',v:'Điều gì khiến user recommend cho người khác? Điều gì khiến họ chủ động im lặng?'}],fail:'Journey map chỉ cover từ onboarding đến first use — miss entire post-purchase experience.'},
    {id:'cx2',why:'Segment khác nhau có journey rất khác nhau trong tài chính. Gộp chung = map không accurate với bất kỳ segment nào.',steps:[{k:'≥2 segments',v:'VD: first-time user vs. experienced user; người vay vs. người gửi; mobile-first vs. branch user.'},{k:'Map riêng nếu cần',v:'Nếu journey của 2 segments khác nhau đáng kể (>30% touchpoints khác), map riêng — không merge.'}],fail:'Journey map gộp tất cả segment vào 1 map với chú thích "tùy người khác nhau" — không actionable.'},
    {id:'cx3',why:'Cảm xúc giả định của researcher ≠ cảm xúc thực của user. Trong tài chính, cảm xúc thực thường phức tạp hơn nhiều (lo lắng, mất tin tưởng) mà researcher hay "softening" khi viết.',steps:[{k:'Quote từ user',v:'Mỗi điểm emotional trên curve phải có ≥1 user quote cụ thể.'},{k:'Observation evidence',v:'Hoặc observation note: "User dừng lại, đọc lại lần 3, thở dài rồi mới bấm tiếp" = anxiety, không cần user nói ra.'},{k:'Không giả định',v:'Nghiên cứu viên không được "fill in" cảm xúc ở touchpoints chưa có data.'}],fail:'Emotional curve được vẽ dựa trên logic của researcher ("chắc user vui ở bước này") thay vì evidence.'},
    {id:'cx4',why:'Sản phẩm tài chính có touchpoint offline quan trọng không kém online: branch, hotline CS, delivery tài liệu. Bỏ sót offline = map không complete.',steps:[{k:'Online inventory',v:'Web, app, social media, email, push notification, SMS, chat bot.'},{k:'Offline inventory',v:'Branch/phòng giao dịch, hotline, nhân viên field, delivery chứng từ, ATM.'},{k:'Human touchpoints',v:'CS representative, relationship manager, sales agent — những nơi experience phụ thuộc vào con người, không phải system.'}],fail:'Touchpoint inventory chỉ có digital channels — bỏ sót toàn bộ offline và human touchpoints.'},
    {id:'cx5',why:'Liệt kê tất cả pain points đồng đều = không actionable. Impact × frequency matrix buộc team tập trung vào pain points vừa phổ biến vừa nghiêm trọng.',steps:[{k:'Impact (1–5)',v:'Nếu pain point này không được fix, user bỏ sản phẩm hoặc không đạt được mục tiêu của họ ở mức nào?'},{k:'Frequency (1–5)',v:'Bao nhiêu % user gặp pain point này trong journey?'},{k:'Prioritize góc trên phải',v:'High impact + high frequency = fix first. Low impact + low frequency = nice to have.'}],fail:'Section pain points là danh sách dài 20 items không có priority — design team không biết bắt đầu từ đâu.'},
    {id:'cx6',why:'Journey map chỉ hữu ích khi cross-functional team hiểu và sở hữu nó. Nếu chỉ design team có, offline touchpoints của CS và Sales vẫn không được cải thiện.',steps:[{k:'Share format',v:'Export PDF hoặc Miro link — không phải format mà chỉ researcher dùng được.'},{k:'Q&A session',v:'Sales, CS, Marketing đọc map và confirm: "đây có phản ánh đúng experience của customer mà chúng tôi thấy không?"'},{k:'Owner per touchpoint',v:'Mỗi touchpoint pain point có 1 team owner chịu trách nhiệm.'}],fail:'Journey map đẹp nằm trong slide deck của design team — CS và Operations không biết nó tồn tại.'},
    {id:'cx7',why:'Service blueprint là layer tiếp theo của journey map — show backstage processes và support systems gây ra friction ở frontline. Cần thiết khi phát hiện systemic issues.',steps:[{k:'Khi nào cần',v:'Khi root cause của pain point là internal process, không phải UX. VD: time to approve loan > 3 ngày vì approval workflow phức tạp.'},{k:'Nội dung',v:'Frontstage (user sees) + Backstage (invisible to user: staff actions, systems) + Support processes (IT, legal, operations).'}],fail:'Team redesign UI mà không biết pain point đến từ backend process — UI mới vẫn chậm vì process chưa đổi.'},
  ],
  'offline-field':[
    {id:'of1',why:'Không có protocol = mỗi observer quan sát theo cách khác nhau = findings không thể aggregate. Với 2 observer độc lập, cần cùng 1 framework để so sánh.',steps:[{k:'Behavior checklist',v:'Danh sách behavior cụ thể cần quan sát. VD với in-store: "Thời gian từ vào cửa đến tiếp cận quầy", "Có hỏi nhân viên không?", "Có đọc tờ rơi không?"'},{k:'Định nghĩa rõ',v:'Mỗi behavior phải được định nghĩa cụ thể để 2 observer nhất trí khi nào "xảy ra". VD: "Do not disturb" = user không nhìn lên trong ≥30 giây.'},{k:'Role của observer',v:'Primary observer vs. note-taker vs. timer — không để 1 người làm tất cả.'}],fail:'Mỗi observer về viết note theo cách khác nhau — findings không thể cross-check.'},
    {id:'of2',why:'8 sessions là ngưỡng tối thiểu để thấy pattern ổn định trong behavioral observation. Ít hơn = quá nhiều variance.',steps:[{k:'≥8 field sessions',v:'Spread across different time slots (morning/afternoon/weekend) và locations nếu có nhiều điểm.'},{k:'Mystery shopping coverage',v:'Cover tất cả touchpoints trong checklist đã define: từ enter đến exit. Không skip touchpoint vì "bận".'},{k:'Documentation on-site',v:'Ghi chú ngay tại địa điểm, không để đến tối rồi viết từ memory.'}],fail:'Observation chỉ có 3–4 sessions, tất cả vào buổi sáng ngày thường — không capture được weekend/evening behavior.'},
    {id:'of3',why:'1 observer duy nhất = không có quality check cho subjective interpretation. 2 observer độc lập là minimum để phát hiện personal bias.',steps:[{k:'Observe độc lập',v:'2 observers không share notes trong khi field. Sau đó so sánh — disagreement chính là điểm cần thảo luận.'},{k:'Cross-check trước tổng hợp',v:'Không tổng hợp trước khi 2 observers đã cross-check. Differences được resolve bằng discussion, không phải consensus pressure.'}],fail:'Chỉ có 1 researcher đi field — findings 100% depend on their interpretation.'},
    {id:'of4',why:'Text notes có thể bị misremembered hoặc reinterpreted. Visual evidence là record không thể tranh luận.',steps:[{k:'Photo',v:'Environment, signage, layout, customer behavior (face blur nếu cần). Chụp ngay khi xảy ra.'},{k:'Video (khi được phép)',v:'Flow behavior, queueing pattern, interaction với staff. Xin phép trước hoặc chọn angle không capture face.'},{k:'Khi không được phép',v:'Sketch diagram ngay tại chỗ. Note specific quotes của staff/customer.'}],fail:'Report chỉ có text notes — không reproduce được cho người không tham gia field.'},
    {id:'of5',why:'Field observation một mình là anecdote. Triangulation với data nguồn khác là validation.',steps:[{k:'Survey data',v:'Những gì user nói họ làm (survey) vs. những gì họ thực sự làm (observation) — sự khác nhau rất illuminating.'},{k:'CS ticket',v:'Complaint logs từ CS cho biết pain points nào đủ nghiêm trọng để user gọi điện.'},{k:'Analytics',v:'Drop-off data xác nhận: "sau khi nhân viên giải thích, 40% user rời quầy không ký" = confirm friction.'}],fail:'Field findings trái ngược với survey data nhưng không được investigate — một trong hai phải sai.'},
    {id:'of6',why:'Context cho phép distinguish giữa systemic issue và isolated incident. VD: "long queue" chỉ nghiêm trọng nếu xảy ra consistently, không phải chỉ vì hôm đó understaffed.',steps:[{k:'Time context',v:'Note time của mọi observation. Pattern theo giờ/ngày thường quan trọng hơn absolute behavior.'},{k:'Staff context',v:'Note số lượng staff, observed mood, workload — behavior của user ảnh hưởng nhiều bởi staff experience.'},{k:'External factors',v:'Note bất kỳ unusual factor nào: promotion đang chạy, system down, weather, v.v.'}],fail:'Note chỉ có behavior, không có context — không biết behavior đó là normal hay exceptional.'},
    {id:'of7',why:'Service blueprint là deliverable cần thiết khi root cause của user pain là internal process, không phải UX hay staff attitude.',steps:[{k:'Khi nào cần',v:'Khi observation thấy: user bị đẩy từ người này sang người khác, thời gian chờ unexpectedly dài, staff phải workaround procedure.'},{k:'Blueprint components',v:'Physical evidence (what user sees) + User actions + Frontstage (visible staff) + Backstage (invisible staff) + Support processes.'}],fail:'Team thấy problem nhưng không biết root cause là process — chỉ train thêm staff mà không fix workflow.'},
  ],
  'market-strategic':[
    {id:'ms1',why:'Sản phẩm tài chính cạnh tranh trong nhiều layer — direct competitor + adjacent category + behavior substitute. Miss một layer = strategy có blind spot.',steps:[{k:'Direct',v:'Cùng sản phẩm, cùng segment. Dễ identify nhất.'},{k:'Indirect',v:'Khác sản phẩm nhưng cùng job-to-be-done.'},{k:'Substitute',v:'Không dùng sản phẩm tài chính nào cả. VD: vay mượn bạn bè.'},{k:'Emerging disruptors',v:'Startup đang fundraising, product trong beta. Market size estimate (TAM/SAM/SOM) với methodology rõ ràng.'}],fail:'Competitive landscape chỉ có 4–5 tên đang có thị phần lớn, không có emerging player.'},
    {id:'ms2',why:'Policy và pricing thay đổi nhanh trong fintech. Deep dive ≥6 đối thủ đảm bảo đủ data để identify pattern và outlier.',steps:[{k:'Policy analysis',v:'So sánh: điều kiện vay, lãi suất, phí, ưu đãi, grace period, early repayment penalty.'},{k:'Product features',v:'Feature matrix: có/không/partial cho mỗi capability quan trọng.'},{k:'UX flow',v:'Onboarding steps, key decision screens, error handling, off-boarding flow.'},{k:'Marketing message',v:'Value proposition nào họ đang push? Channel nào? Tone nào?'}],fail:'Deep dive chỉ cover 2–3 đối thủ quen thuộc vì "đã biết rồi".'},
    {id:'ms3',why:'"Bạn sẵn sàng trả bao nhiêu?" là câu hỏi không có giá trị — người trả lời luôn understate. Van Westendorp và conjoint cho kết quả realistic hơn nhiều.',steps:[{k:'Van Westendorp',v:'4 câu hỏi về price points: quá rẻ, rẻ nhưng chấp nhận, đắt nhưng chấp nhận, quá đắt. Intersection points cho acceptable price range.'},{k:'Conjoint analysis',v:'Cho user chọn giữa các gói feature+price bundle. Reveal implicit WTP qua trade-off behavior.'},{k:'Minimum viable',v:'Van Westendorp đủ cho most cases. Conjoint khi cần pricing decision với impact lớn.'}],fail:'Pricing research chỉ hỏi open-end "bạn nghĩ mức phí X là hợp lý không?" — câu trả lời bị biased.'},
    {id:'ms4',why:'Positioning matrix buộc team quyết định ngay "chúng ta đang chơi trên trục nào" — thường là conversation quan trọng nhất mà bị skip.',steps:[{k:'Trục có ý nghĩa chiến lược',v:'Axes phải reflect trade-off thật trong market. VD: "Dễ dùng vs. Tính năng đầy đủ" là real trade-off trong tài chính.'},{k:'White space analysis',v:'Quadrant nào đang trống? Tại sao? Là opportunity hay dead zone?'}],fail:'Positioning map với trục "chất lượng" vs "giá" — quá generic để dẫn đến strategic decision.'},
    {id:'ms5',why:'Người thực sự đã chọn hoặc rời bỏ đối thủ có insight sâu nhất — họ đã ra quyết định thật, không phải hypothetical.',steps:[{k:'≥5 win/loss interviews',v:'Mix: user đã chọn mình thay vì X, user đã chọn X thay vì mình, user đã rời bỏ X để sang mình.'},{k:'Câu hỏi chính',v:'"Điều gì cuối cùng khiến bạn quyết định?" — không phải "Bạn thích gì ở sản phẩm đó?" (leading).'},{k:'Record',v:'Win/loss insights là gold — phải record để có thể share với Sales và Marketing.'}],fail:'Win/loss section trong report là speculation về lý do tại sao user chọn/rời đối thủ, không phải từ interview thực.'},
    {id:'ms6',why:'Market size estimate từ 1 nguồn thường bị inflated hoặc deflated. 2 nguồn độc lập cho range realistic hơn.',steps:[{k:'TAM',v:'Total Addressable Market — toàn bộ thị trường nếu có 100% market share.'},{k:'SAM',v:'Serviceable Addressable Market — phần TAM mà business model hiện tại có thể reach.'},{k:'SOM',v:'Serviceable Obtainable Market — realistic target trong 3–5 năm tới.'},{k:'≥2 nguồn independent',v:'VD: industry report + bottom-up estimate từ số user demographics + competitor revenue estimate.'}],fail:'TAM/SAM/SOM chỉ cite 1 số từ 1 nguồn không rõ methodology.'},
    {id:'ms7',why:'Strategic research có giá trị nhất khi inform decision trước khi team đã committed. Bàn giao sau khi quyết định = research không có impact.',steps:[{k:'Present trước planning cycle',v:'Biết lịch product planning của công ty và deliver strategic brief ít nhất 2 tuần trước.'},{k:'Decision được ghi nhận',v:'Note lại decision nào đã được inform bởi research này. Đây là evidence cho value of research.'}],fail:'Strategic brief được deliver sau khi roadmap H2 đã được lock.'},
  ],
  'xm-measure':[
    {id:'xm1',why:'Leading question trong survey làm skew toàn bộ kết quả. "Bạn có hài lòng với dịch vụ tuyệt vời của chúng tôi không?" không phải câu hỏi hợp lệ.',steps:[{k:'Không leading',v:'Câu hỏi trung lập, không suggest câu trả lời. VD: "Bạn đánh giá thế nào về dịch vụ?" thay vì "Dịch vụ của chúng tôi tốt như thế nào?"'},{k:'Không double-barreled',v:'"Dịch vụ của chúng tôi có nhanh và thân thiện không?" = 2 câu hỏi trong 1. Tách ra.'},{k:'Pilot test ≥5 người',v:'Nhờ 5 người đọc survey và note chỗ nào confusing. Sửa trước khi launch đại trà.'}],fail:'Survey được launch mà không có pilot test — phát hiện câu hỏi ambiguous sau khi đã có 200 responses.'},
    {id:'xm2',why:'Baseline từ sample không representative = tất cả tracking về sau so với số sai. NPS của premium user ≠ NPS của mass user.',steps:[{k:'Sample representative',v:'Đủ tất cả segments quan trọng: user tier, product type, tenure (new vs. long-term user), channel.'},{k:'Sample size đủ',v:'NPS cần ≥200 responses để confidence interval chấp nhận được. CSAT từng interaction cần ≥50/interaction type.'},{k:'Ghi rõ methodology',v:'Cách tính score (mỗi tool tính NPS khác nhau đôi chút) — ghi rõ để so sánh được theo thời gian.'}],fail:'Baseline NPS 45 nhưng 80% responses là từ power users — không represent được base rộng hơn.'},
    {id:'xm3',why:'Measurement không có cadence = measurement không có meaning. Team không biết score 45 là tốt hay xấu nếu không có historical trend.',steps:[{k:'Cadence rõ ràng',v:'Monthly cho operational metrics (CSAT, CES). Quarterly cho relationship metrics (NPS). Annual cho strategic satisfaction.'},{k:'Communicate rộng',v:'Tất cả stakeholder biết khi nào có kết quả tiếp theo và sẽ nhận report qua đâu.'},{k:'No-surprise principle',v:'Leadership không được surprised bởi score — phải được briefed trước khi số được publish rộng.'}],fail:'NPS được đo khi có người nhớ, không theo schedule — so sánh Q1 vs Q3 không có giá trị.'},
    {id:'xm4',why:'Score không có driver = không biết làm gì để improve. "NPS của chúng ta là 32" không useful bằng "NPS của chúng ta là 32 vì 67% detractors cite loan approval time > 5 ngày".',steps:[{k:'Driver analysis methodology',v:'Regression analysis: correlation giữa sub-scores và overall score. Top drivers = variables có correlation cao nhất.'},{k:'Không chỉ dùng top mentions',v:'Open-end "tại sao bạn rate điểm này" cho top-of-mind answers, không phải root cause. Cần regression trên closed-end scores.'},{k:'Segment drivers',v:'Drivers khác nhau theo segment — premium user có thể driver là relationship quality; mass user là ease of use.'}],fail:'Driver analysis chỉ là word cloud từ open-end responses — không có statistical backing.'},
    {id:'xm5',why:'Exit research là goldmine vì người rời bỏ đã quyết định rồi — họ nói thật hơn người đang dùng.',steps:[{k:'≥15 exit interviews',v:'Qualitative interview (15–30 phút) với người vừa rời bỏ hoặc churn. Trong vòng 2 tuần sau khi churn — trễ hơn thì memory fades.'},{k:'Survey exit',v:'Gửi exit survey cho tất cả user churn — response rate thường thấp nhưng scale lớn.'},{k:'Top 3–5 reasons với frequency',v:'Không phải liệt kê tất cả lý do. Quantify: "37% cite X, 24% cite Y" — đây là input cho product roadmap.'}],fail:'Churn research chỉ có email survey với 3% response rate — kết quả bị biased hoàn toàn bởi những ai respond.'},
    {id:'xm6',why:'Aggregate NPS của toàn company ẩn đi nhiều thứ. NPS của segment A có thể là 65 trong khi segment B là 15 — cần làm gì hoàn toàn khác nhau.',steps:[{k:'User tier breakdown',v:'Premium vs. Standard vs. Basic — expectation và experience khác nhau.'},{k:'Product type',v:'NPS của sản phẩm vay vs. gửi vs. đầu tư thường rất khác nhau.'},{k:'Tenure breakdown',v:'<3 tháng vs. 3–12 tháng vs. >12 tháng — new user pain ≠ long-term user pain.'},{k:'Channel',v:'App user vs. branch user vs. online banking user.'}],fail:'Report chỉ có 1 số NPS duy nhất cho toàn company — không actionable cho bất kỳ team nào.'},
    {id:'xm7',why:'Dashboard không có người đọc và act = decoration. Metric movement mà không có người chịu trách nhiệm investigate = số vô nghĩa.',steps:[{k:'Dashboard shared + accessible',v:'Link dashboard trong weekly/monthly report của leadership. Không chỉ research team có access.'},{k:'Regular review',v:'Monthly review với product team. Quarterly review với leadership.'},{k:'Action items tracked',v:'Khi score drop: trong 48h phải có hypothesis về nguyên nhân. Trong 1 tuần phải có action item với owner.'}],fail:'Dashboard tồn tại nhưng chỉ researcher mở. Score drop 5 points, không ai comment gì trong 2 tuần.'},
  ],
  'synthesis':[
    {id:'sy1',why:'Tóm tắt tùy ý phụ thuộc vào ai viết và hôm đó họ nhớ gì. Systematic method cho kết quả reproducible và defensible.',steps:[{k:'Affinity mapping',v:'Tất cả observations → individual notes → group bottom-up. Không group theo pre-existing categories.'},{k:'Thematic analysis',v:'Code line-by-line, develop themes from codes, review themes. Documented process.'},{k:'Grounded theory',v:'Cho research khám phá: constant comparison, theoretical sampling, saturation.'}],fail:'Synthesis là meeting discussion mà không có documented process — không reproducible.'},
    {id:'sy2',why:'Research repository không searchable = insight chết sau 6 tháng khi researcher gốc rời team.',steps:[{k:'Tagging system',v:'Consistent tags: research type, product area, user segment, date, status (confirmed/emerging). Team phải agree trên taxonomy trước.'},{k:'Search functionality',v:'Test: "có thể tìm thấy insight về onboarding friction trong vòng 2 phút không?" Nếu không = system chưa đủ tốt.'},{k:'Tool',v:'Notion, Dovetail, Confluence, Airtable đều work. Key là consistency, không phải tool choice.'}],fail:'Insights nằm rải rác trong slides, emails, và Notion pages không linked — không thể search cross-project.'},
    {id:'sy3',why:'Executive summary ≤1 trang là constraint quan trọng nhất — buộc researcher prioritize thực sự thay vì "đưa tất cả vào cho đủ".',steps:[{k:'Context (1–2 câu)',v:'Tại sao research này được thực hiện? Business question gì được trả lời?'},{k:'Key findings (3–5 bullets)',v:'Mỗi finding = 1 insight có evidence, không phải 1 observation.'},{k:'Recommendations (3–5)',v:'Gắn với action cụ thể. Đã prioritized.'},{k:'Next steps',v:'Ai cần làm gì, khi nào. Không mơ hồ.'}],fail:'Executive summary dài 3 trang — leadership đọc executive summary của executive summary, không đọc original.'},
    {id:'sy4',why:'Design team cần granular findings về specific flows. C-level cần business implication. Marketing cần customer language. Cùng 1 research nhưng packaging khác nhau.',steps:[{k:'Design team',v:'Annotated screenshots, specific flow issues, priority matrix, design recommendations.'},{k:'C-level',v:'Business impact, opportunity sizing, risk if not addressed, recommended investment.'},{k:'Marketing',v:'Customer language (direct quotes), pain points to address in messaging, segment characteristics.'},{k:'CS/Operations',v:'Process gaps, frequently misunderstood policies, escalation patterns.'}],fail:'Cùng 1 deck được present cho tất cả audience — design team bored với business numbers, C-level lost với UX detail.'},
    {id:'sy5',why:'Action items không SMART = action items không được làm.',steps:[{k:'Specific',v:'"Redesign bước xác nhận giao dịch" — không phải "cải thiện UX".'},{k:'Measurable',v:'"Reduce confusion rate từ 40% xuống <15%" — không phải "giảm confusion".'},{k:'Assigned',v:'Tên người chịu trách nhiệm — không phải team name chung.'},{k:'Time-bound',v:'"Trước Sprint 24 (15/03)" — không phải "trong thời gian sớm nhất".'}],fail:'Action items là "team sẽ xem xét findings này" — không ai owns anything.'},
    {id:'sy6',why:'Evidence trail là thứ cho phép future researcher trace tại sao product đã được quyết định như vậy — institutional memory.',steps:[{k:'Link 2 chiều',v:'Research report link sang product decision. Product decision note link ngược về research.'},{k:'Traceability',v:'"Tính năng X được build vì research Y tháng Z cho thấy insight W" — phải trace được trong 2 năm.'},{k:'Null results',v:'Research nói "không có sufficient evidence để build X" cũng cần được document — tránh research lại sau 6 tháng.'}],fail:'Roadmap items không có research backing được ghi rõ — không biết decision dựa trên evidence hay gut feel.'},
    {id:'sy7',why:'Impact measurement là lý do tồn tại của research team. Nếu không track, team không biết mình có đang tạo ra value không.',steps:[{k:'Định nghĩa "decision có research backing"',v:'Trước khi track, team phải agree: decision như thế nào được coi là có research backing? (VD: có ít nhất 1 research study trong vòng 6 tháng directly address topic đó.)'},{k:'Quarterly count',v:'Đếm số decisions trong quarter, số decisions có research backing.'},{k:'Report lên leadership',v:'% này là OKR của research team. Nếu 30% = team chưa đủ strategic influence.'}],fail:'Research team không track impact — không có data để justify research budget.'},
  ],
};

// ══════════════════════════════════════════════════════════
// GLOSSARY FUNCTIONS
// ══════════════════════════════════════════════════════════
function openGlossary(groupId, roleType) {
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  document.getElementById('view-glossary').classList.add('active');
  document.getElementById('nav-glossary').classList.add('active');
  S.view='glossary';
  renderGlossary(groupId, roleType);
}

function renderGlossary(activeGroupId, activeRoleType) {
  function hexToRgb(hex){
    const h=hex.replace('#','').trim();
    if(h.length!==6) return null;
    const n=parseInt(h,16);
    if(Number.isNaN(n)) return null;
    return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};
  }
  function contrastTextColor(bg){
    const rgb=hexToRgb(bg);
    if(!rgb) return '#fff';
    const y=(rgb.r*299 + rgb.g*587 + rgb.b*114)/1000;
    return y>=160 ? '#000' : '#fff';
  }

  // 2-level filters: role (level 1) + group (level 2)
  const roleType = activeRoleType || (activeGroupId ? (GROUPS.uiux.some(g=>g.id===activeGroupId) ? 'uiux' : 'uxr') : 'uiux');
  S.glossaryLastGroupByRole = S.glossaryLastGroupByRole || {};

  const roleGroups = (GROUPS[roleType] || []).map(g=>({...g, roleType}));
  const defaultGroupId = roleGroups[0]?.id || null;
  const rememberedGroupId = S.glossaryLastGroupByRole[roleType];
  const preferredGroupId = (activeGroupId && roleGroups.some(g=>g.id===activeGroupId))
    ? activeGroupId
    : (rememberedGroupId && roleGroups.some(g=>g.id===rememberedGroupId) ? rememberedGroupId : defaultGroupId);

  const curGroupId = preferredGroupId;
  const activeGroup = roleGroups.find(g=>g.id===curGroupId) || roleGroups[0];
  if(curGroupId) S.glossaryLastGroupByRole[roleType] = curGroupId;

  const roleTabsHTML = [
    {id:'uiux', label:'UX/UI Designer'},
    {id:'uxr', label:'Strategic Researcher'},
  ].map(r=>{
    const isOn = r.id === roleType;
    const nextGroup = (S.glossaryLastGroupByRole?.[r.id] && (GROUPS[r.id]||[]).some(g=>g.id===S.glossaryLastGroupByRole[r.id]))
      ? S.glossaryLastGroupByRole[r.id]
      : (GROUPS[r.id]?.[0]?.id || '');
    return `<button class="gl-tab${isOn?' on':''}" style="${isOn?'background:var(--accent);border-color:var(--accent);color:#000':''}" onclick="renderGlossary('${nextGroup}','${r.id}')">${r.label}</button>`;
  }).join('');

  // Group tabs (filtered by role)
  const tabsHTML = roleGroups.map(g => {
    const isOn = g.id === curGroupId;
    const onColor=isOn ? contrastTextColor(g.color) : '';
    return `<button class="gl-tab${isOn?' on':''}" style="${isOn?`background:${g.color};border-color:${g.color};`:''}color:${onColor}" onclick="renderGlossary('${g.id}','${roleType}')">${g.name}</button>`;
  }).join('');

  // Group content
  const glossItems = DOD_GLOSSARY[curGroupId] || [];
  const groupDod = activeGroup?.dod || [];

  const itemsHTML = groupDod.map((dodItem, idx) => {
    const gloss = glossItems.find(x=>x.id===dodItem.id);
    const numColor = dodItem.core ? 'var(--accent)' : 'var(--border3)';
    const numTextColor = dodItem.core ? '#000' : '#fff';
    const stepsHTML = gloss ? gloss.steps.map(s=>`<li><strong>${s.k}:</strong> ${s.v}</li>`).join('') : '';
    const failHTML = gloss?.fail ? `<div class="gl-fail">${gloss.fail}</div>` : '';
    const whyHTML = gloss?.why ? `<div class="gl-why"><strong>Tại sao item này tồn tại?</strong>${gloss.why}</div>` : '';

    return `<div class="gl-item" id="gl-${dodItem.id}">
      <div class="gl-item-header" onclick="toggleGlItem('${dodItem.id}')">
        <div class="gl-item-num" style="background:${numColor};color:${numTextColor}">${idx+1}</div>
        <div class="gl-item-title">${dodItem.text}</div>
        ${dodItem.core ? '<div class="gl-core-badge">CORE</div>' : ''}
        <div class="gl-chevron">▶</div>
      </div>
      <div class="gl-item-body">
        ${whyHTML}
        ${stepsHTML ? `<div style="font-family:var(--mono);font-size:14px;color:var(--text3);letter-spacing:.8px;margin-bottom:8px;margin-top:4px">CÁCH THỰC HIỆN ĐẦY ĐỦ</div><ul class="gl-steps">${stepsHTML}</ul>` : ''}
        ${failHTML}
      </div>
    </div>`;
  }).join('');

  const subMethods = {
    'user-research': 'Usability testing · User interview · Contextual inquiry · Survey / Diary study',
    'data-analytics': 'Analytics review · Heatmap / Session · A/B testing · Funnel analysis',
    'market-ux': 'Competitor nghiên cứu · Heuristic evaluation · Trend nghiên cứu · Benchmarking',
    'strategic': 'Generative nghiên cứu · Jobs-to-be-done · Segmentation research',
    'cx-journey': 'Customer journey · Touchpoint nghiên cứu · Pain point mapping',
    'offline-field': 'In-store observation · Mystery shopping · Ethnographic research',
    'market-strategic': 'Market landscape · Competitive UX audit · Pricing perception',
    'xm-measure': 'NPS / CSAT / CES · Longitudinal study · Exit / Churn research',
    'synthesis': 'Research synthesis · Insight repository · Stakeholder reporting',
  };
  const trackLabel = (activeGroup?.roleType||activeRoleType)==='uiux' ? 'UX/UI Designer' : 'Strategic Researcher';

  document.getElementById('glossary-content').innerHTML = `
    <div style="margin-bottom:20px;display:flex;align-items:center;gap:10px">
      <button class="btn btn-ghost btn-sm" onclick="history.back();if(S.cur)showDetail(S.cur.id)">${ICON_CHEVRON_LEFT}Quay lại</button>
      <div>
        <div style="font-family:var(--head);font-size:20px;font-weight:700">Giải nghĩa DoD</div>
        <div style="font-size:14px;color:var(--text2);margin-top:2px">Giải nghĩa chi tiết từng tiêu chí Definition of Done</div>
      </div>
    </div>

    <div class="gl-group-tabs" style="margin-bottom:10px">${roleTabsHTML}</div>
    <div class="gl-group-tabs">${tabsHTML}</div>

    <div style="margin-bottom:18px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        <div style="width:10px;height:10px;border-radius:50%;background:${activeGroup?.color||'var(--accent)'}"></div>
        <div class="gl-group-title">${activeGroup?.name||''}</div>
        <span class="tag ${(activeGroup?.roleType||activeRoleType)==='uiux'?'t-uiux':'t-uxr'}">${trackLabel}</span>
      </div>
      <div class="gl-group-sub">${subMethods[curGroupId]||''}</div>
      <div style="display:flex;gap:14px;font-size:14px;color:var(--text3)">
        <span>●&nbsp;<span style="color:var(--accent)">Xanh</span> = CORE (hard-block nếu thiếu)</span>
        <span>●&nbsp;<span style="color:var(--border3)">Xám</span> = Extended (quality differentiator)</span>
        <span style="color:var(--text3)">Click vào từng item để xem giải nghĩa chi tiết</span>
      </div>
    </div>

    <div id="gl-items">${itemsHTML}</div>`;
}

function toggleGlItem(id) {
  const el = document.getElementById('gl-'+id);
  if(!el) return;
  el.classList.toggle('open');
}

load().then(()=>{syncGroups();renderMemberBar();renderDash();});

