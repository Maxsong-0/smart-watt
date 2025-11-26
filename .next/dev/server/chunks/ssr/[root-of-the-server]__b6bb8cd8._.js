module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/theme-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/theme-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/i18n/locales/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"common\":{\"settings\":\"Settings\",\"save\":\"Save\",\"cancel\":\"Cancel\",\"language\":\"Language\",\"theme\":\"Theme\",\"role\":\"Role\",\"loading\":\"Loading...\",\"error\":\"Error\",\"success\":\"Success\",\"na\":\"N/A\",\"viewDetails\":\"View Details\",\"share\":\"Share\",\"departments\":{\"facilitiesManagement\":\"Facilities Management\",\"gridOperations\":\"Grid Operations\"},\"units\":{\"kw\":\"kW\",\"kwh\":\"kWh\",\"f\":\"°F\",\"c\":\"°C\",\"percentage\":\"%\",\"currency\":\"$\",\"tons\":\"tons\"},\"loadTypes\":{\"HVAC\":\"HVAC\",\"Lighting\":\"Lighting\",\"Equipment\":\"Equipment\",\"IT Systems\":\"IT Systems\",\"Other\":\"Other\"}},\"languages\":{\"en\":\"English\",\"zh\":\"??\"},\"nav\":{\"overview\":\"Overview\",\"predictions\":\"AI Predictions\",\"grid\":\"Grid Interaction\",\"buildings\":\"Buildings\",\"config\":\"Configuration\",\"reports\":\"Reports\",\"settings\":\"Settings\"},\"roles\":{\"facilityManager\":\"Facility Manager\",\"utilityRep\":\"Utility Representative\",\"bob\":\"Bob\",\"alice\":\"Alice\",\"facilityManagerDesc\":\"Manage buildings and equipment\",\"utilityRepDesc\":\"Monitor grid and DR programs\"},\"theme\":{\"light\":\"Light\",\"dark\":\"Dark\",\"system\":\"System\"},\"settings\":{\"title\":\"Settings\",\"subtitle\":\"Manage your preferences and account settings\",\"appearance\":\"Appearance\",\"appearanceDesc\":\"Customize how the application looks\",\"language\":\"Language\",\"languageDesc\":\"Select your preferred language\",\"themeDesc\":\"Choose your preferred color scheme\",\"notifications\":\"Notifications\",\"notificationsDesc\":\"Configure notification preferences\",\"profile\":\"Profile\",\"profileDesc\":\"Update your profile information\",\"roleDesc\":\"Switch between user perspectives\",\"emailNotifications\":\"Email Notifications\",\"emailNotificationsDesc\":\"Receive important updates via email\",\"pushNotifications\":\"Push Notifications\",\"pushNotificationsDesc\":\"Browser push notifications\",\"drAlerts\":\"DR Event Alerts\",\"drAlertsDesc\":\"Demand response event notifications\",\"systemAlerts\":\"System Alerts\",\"systemAlertsDesc\":\"System and equipment alerts\",\"displayName\":\"Display Name\",\"email\":\"Email\",\"phone\":\"Phone\",\"department\":\"Department\",\"profileSaved\":\"Profile saved successfully\"},\"header\":{\"searchPlaceholder\":\"Search… (Ctrl/Cmd+K)\",\"live\":\"Live\",\"notifications\":\"Notifications\",\"markAllRead\":\"Mark all read\",\"noNotifications\":\"No notifications\",\"ptsPerSec\":\"pts/s\",\"noResults\":\"No results found.\",\"navigateTitle\":\"Navigating to {{item}}\",\"navigateDesc\":\"Search result selected\",\"search\":{\"buildings\":\"Buildings\",\"equipment\":\"Equipment\",\"pages\":\"Pages\"},\"notificationsData\":{\"drEvent\":{\"title\":\"DR Event Starting\",\"desc\":\"Capacity DR event begins in 30 minutes\"},\"highUsage\":{\"title\":\"High Energy Usage\",\"desc\":\"Science Building exceeded threshold\"},\"optimization\":{\"title\":\"Optimization Applied\",\"desc\":\"HVAC pre-cooling completed successfully\"}}},\"dashboard\":{\"title\":\"Campus Overview\",\"subtitle\":\"Real-time energy monitoring and control\",\"totalLoad\":\"Total Campus Load\",\"gridUtilization\":\"Grid Utilization\",\"todaysSavings\":\"Today's Savings\",\"carbonOffset\":\"Carbon Offset\",\"vsYesterday\":\"vs yesterday\",\"vsAvg\":\"vs avg\",\"thisMonth\":\"this month\",\"energyConsumption\":\"Energy Consumption\",\"energyConsumptionDesc\":\"24-hour trend with AI predictions\",\"actual\":\"Actual\",\"predicted\":\"Predicted\",\"demandResponse\":\"Demand Response\",\"campusMap\":\"Campus Map\",\"campusMapDesc\":\"Building status and load distribution\",\"campusMapUI\":{\"overview\":\"Campus Overview - Live\",\"totalLoad\":\"TOTAL LOAD\",\"tooltip\":{\"load\":\"Load\",\"temperature\":\"Temperature\",\"hvac\":\"HVAC\",\"status\":\"Status\"},\"legend\":{\"title\":\"Status\",\"normal\":\"Normal\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"drActive\":\"DR Active\"}},\"loadBreakdown\":\"Load Breakdown\",\"drStatus\":{\"activeEvent\":\"Active DR Event\",\"pending\":\"Pending\",\"completed\":\"Completed\",\"reductionProgress\":\"Reduction Progress\",\"eventProgress\":\"Event Progress\",\"upcomingEvents\":\"Upcoming Events\",\"event\":\"Event\"},\"energyChart\":{\"live\":\"Live\",\"peak\":\"Peak\",\"actual\":\"Actual\",\"predicted\":\"Predicted\",\"peakThreshold\":\"Peak Threshold\"}},\"auth\":{\"login\":\"Login\",\"logout\":\"Logout\",\"register\":\"Register\",\"email\":\"Email\",\"password\":\"Password\",\"confirmPassword\":\"Confirm Password\",\"name\":\"Name\",\"namePlaceholder\":\"Enter your name\",\"rememberMe\":\"Remember me\",\"welcomeBack\":\"Welcome back\",\"loginSubtitle\":\"Sign in to your account to continue\",\"createAccount\":\"Create an account\",\"registerSubtitle\":\"Get started with Smart Watt\",\"orQuickDemo\":\"Or try a quick demo\",\"noAccount\":\"Don't have an account?\",\"hasAccount\":\"Already have an account?\",\"loggingIn\":\"Logging in...\",\"registering\":\"Registering...\",\"loginFailed\":\"Login failed\",\"registerFailed\":\"Registration failed\",\"passwordMismatch\":\"Passwords do not match\",\"passwordTooShort\":\"Password must be at least 4 characters\",\"selectRole\":\"Select your role\",\"guest\":\"Guest\",\"brandTagline\":\"Intelligent Energy Management Platform\",\"brandDescription\":\"AI-powered campus energy management and grid interaction platform. Optimize consumption, reduce costs, and achieve sustainability goals.\",\"copyright\":\"© 2024 Smart Watt. All rights reserved.\"},\"errors\":{\"forbidden\":\"Access Denied\",\"forbiddenDesc\":\"You don't have permission to access this page. Please contact your administrator if you believe this is a mistake.\",\"goHome\":\"Go to Home\",\"goBack\":\"Go Back\"},\"buildings\":{\"title\":\"Buildings\",\"subtitle\":\"Monitor and control individual buildings\",\"card\":{\"status\":{\"normal\":\"Normal\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"dr-active\":\"DR Active\"},\"load\":\"Load\",\"hvac\":\"HVAC\",\"viewDetails\":\"View Details\"},\"types\":{\"academic\":\"Academic\",\"residential\":\"Residential\",\"admin\":\"Admin\",\"sports\":\"Sports\",\"library\":\"Library\"},\"names\":{\"eng-1\":\"Engineering Hall\",\"sci-1\":\"Science Center\",\"lib-1\":\"Main Library\",\"res-1\":\"North Residence\",\"res-2\":\"South Residence\",\"admin-1\":\"Admin Building\",\"gym-1\":\"Sports Complex\"}},\"status\":{\"on\":\"ON\",\"off\":\"OFF\",\"eco\":\"ECO\",\"online\":\"Online\",\"offline\":\"Offline\",\"active\":\"Active\",\"inactive\":\"Inactive\",\"error\":\"Error\",\"running\":\"Running\",\"idle\":\"Idle\",\"maintenance\":\"Maintenance\",\"fault\":\"Fault\"},\"grid\":{\"title\":\"Grid Interaction\",\"subtitle\":\"Demand response and utility coordination\",\"stats\":{\"activeEvent\":\"Active DR Event\",\"capacityConstraint\":\"Capacity constraint\",\"currentPrice\":\"Current Grid Price\",\"priceChange\":\"above avg\",\"ytdRevenue\":\"YTD DR Revenue\",\"vsLastYear\":\"vs last year\",\"automation\":\"Automation Active\",\"automationDesc\":\"rules\",\"todayTriggers\":\"2 triggered today\"},\"sections\":{\"signalsTitle\":\"Grid Signals\",\"signalsDesc\":\"Real-time utility communications\",\"priceTitle\":\"Electricity Price\",\"priceDesc\":\"24-hour price history and forecast\",\"priceLegendCurrent\":\"Current Price\",\"priceLegendAverage\":\"Average\",\"programsTitle\":\"Demand Response Programs\",\"programsDesc\":\"Enrolled programs and performance\",\"revenueTitle\":\"Revenue Summary\",\"revenueDesc\":\"DR program earnings\",\"automationTitle\":\"Automation Rules\",\"automationDesc\":\"Auto-response configuration\"},\"price\":{\"avgLabel\":\"Avg\",\"tooltipLabel\":\"Current Price\",\"averageLine\":\"Average\"},\"programCard\":{\"programLabel\":\"Program\",\"enrolled\":\"Enrolled\",\"notEnrolled\":\"Not Enrolled\",\"commitment\":\"Commitment\",\"ytdRevenue\":\"YTD Revenue\",\"events\":\"Events\",\"performance\":\"Performance\"},\"ui\":{\"receiving\":\"Receiving grid signals...\",\"allHandled\":\"All signals handled\",\"responded\":\"Responded\",\"respond\":\"Respond\",\"dismiss\":\"Dismiss\",\"signalDetails\":\"Signal Details\",\"recommendedActions\":\"Recommended Actions\",\"executeResponse\":\"Execute Response\",\"initiating\":\"Initiating response...\",\"initiatingDesc\":\"Running playbook for {{type}} signal\",\"responseSuccess\":\"Response executed successfully\",\"responseSuccessDesc\":\"Automations completed for {{type}} signal\",\"dismissed\":\"Signal dismissed\",\"timeRemaining\":\"Time Remaining\",\"expired\":\"Expired\",\"remaining\":\"remaining\",\"priceMultiplier\":\"Price Multiplier\",\"signalType\":\"{{type}} Signal\",\"severityLabel\":\"Severity\"},\"signals\":{\"sig-1\":\"High electricity price period starting\",\"sig-2\":\"High solar generation available\",\"sig-3\":\"Grid capacity constraint - DR event triggered\"},\"programs\":{\"prog-1\":\"Peak Demand Response\",\"prog-2\":\"Emergency Load Shed\",\"prog-3\":\"Real-Time Pricing\",\"prog-4\":\"Frequency Regulation\"},\"types\":{\"price\":\"Price\",\"emergency\":\"Emergency\",\"capacity\":\"Capacity\",\"renewable\":\"Renewable\"},\"severity\":{\"info\":\"Info\",\"warning\":\"Warning\",\"critical\":\"Critical\"},\"actions\":{\"price\":{\"1\":\"Reduce non-essential loads\",\"2\":\"Delay flexible operations\",\"3\":\"Pre-cool/pre-heat if possible\"},\"emergency\":{\"1\":\"Immediate load reduction required\",\"2\":\"Activate emergency protocols\",\"3\":\"Notify facility managers\"},\"capacity\":{\"1\":\"Participate in demand response\",\"2\":\"Reduce HVAC setpoints\",\"3\":\"Shift flexible loads\"},\"renewable\":{\"1\":\"Increase consumption if possible\",\"2\":\"Charge batteries\",\"3\":\"Run deferrable loads\"}},\"rules\":{\"rule-1\":{\"name\":\"Peak Price Response\",\"trigger\":\"Price > $0.15/kWh\",\"action\":\"Reduce HVAC by 20%, dim lights to 70%\"},\"rule-2\":{\"name\":\"DR Event Auto-Accept\",\"trigger\":\"DR signal received\",\"action\":\"Auto-enroll if incentive > $200\"},\"rule-3\":{\"name\":\"Emergency Shed\",\"trigger\":\"Grid emergency signal\",\"action\":\"Shed non-critical loads immediately\"},\"rule-4\":{\"name\":\"Renewable Maximizer\",\"trigger\":\"High renewable availability\",\"action\":\"Shift deferrable loads to current window\"}},\"revenue\":{\"programsEnrolled\":\"Programs Enrolled\",\"ytd\":\"YTD Revenue\",\"estimator\":\"Revenue Estimator\",\"commitmentLabel\":\"Commitment (kW)\",\"eventsLabel\":\"Expected Events/Year\",\"projectedAnnual\":\"Projected Annual\",\"projectedFootnote\":\"Based on historical program data\"},\"automation\":{\"addRule\":\"Add Automation Rule\",\"editRule\":\"Edit Automation Rule\",\"newRule\":\"New Automation Rule\",\"descriptionEdit\":\"Modify the automation rule settings.\",\"descriptionNew\":\"Create a new automation rule to respond to grid events.\",\"ruleName\":\"Rule Name\",\"trigger\":\"Trigger Event\",\"action\":\"Action\",\"last\":\"Last:\",\"executions\":\"executions\",\"never\":\"Never\",\"ruleActivated\":\"Rule activated\",\"ruleDeactivated\":\"Rule deactivated\",\"ruleDeleted\":\"Rule deleted\",\"fillRequired\":\"Please fill in all fields\",\"saving\":\"Saving...\",\"update\":\"Update\",\"create\":\"Create\",\"triggers\":{\"DR_SIGNAL_RECEIVED\":\"DR Signal Received\",\"PRICE_ABOVE_THRESHOLD\":\"Price Above Threshold\",\"PEAK_DEMAND_ALERT\":\"Peak Demand Alert\",\"SCHEDULE_TIME\":\"Scheduled Time\",\"GRID_EMERGENCY\":\"Grid Emergency\"}}},\"predictions\":{\"title\":\"AI Prediction Center\",\"subtitle\":\"Machine learning powered energy forecasting\",\"suggestions\":{\"opt-1\":{\"title\":\"Pre-cool Science Center before peak hours\",\"desc\":\"Start cooling at 6 AM instead of 8 AM to reduce peak demand by shifting load to off-peak hours.\"},\"opt-2\":{\"title\":\"Reduce lighting in unoccupied zones\",\"desc\":\"Occupancy sensors indicate 40% of Main Library zones are unused. Dim lights to 30%.\"},\"opt-3\":{\"title\":\"Shift EV charging to overnight\",\"desc\":\"Current EV charging coincides with peak hours. Scheduling overnight can save $180/day.\"},\"opt-4\":{\"title\":\"Optimize Sports Complex HVAC schedule\",\"desc\":\"Reduce HVAC 2 hours before closing based on thermal inertia modeling.\"}},\"ui\":{\"analyzing\":\"AI analyzing {{count}} optimization opportunities\",\"savings\":\"Savings:\",\"confidence\":\"Confidence:\",\"apply\":\"Apply\",\"applying\":\"Applying...\",\"generateMore\":\"Generate More Suggestions\",\"generating\":\"Generating...\",\"perDay\":\"/day\"},\"priority\":{\"high\":\"High\",\"medium\":\"Medium\",\"low\":\"Low\"},\"sections\":{\"optimizationsTitle\":\"AI Optimization Suggestions\",\"optimizationsDesc\":\"Smart recommendations to reduce costs\"},\"stats\":{\"accuracy\":\"Prediction Accuracy\",\"vsLastWeek\":\"vs last week\",\"peakForecast\":\"Peak Forecast\",\"todayWindow\":\"Today 2-4 PM\",\"potentialSavings\":\"Potential Savings\",\"ifOptimized\":\"if optimized\",\"activeModels\":\"Active Models\",\"primaryModel\":\"LSTM primary\"},\"chart\":{\"title\":\"24-Hour Load Forecast\",\"description\":\"Historical data and AI predictions with confidence intervals\",\"legendActual\":\"Actual\",\"legendPredicted\":\"Predicted\",\"legendCI\":\"95% CI\",\"now\":\"Now\",\"modelBadge\":\"LSTM Model\",\"peak\":\"Peak\"},\"weekly\":{\"title\":\"Weekly Forecast\",\"description\":\"Daily consumption prediction\",\"lastWeek\":\"Last Week\",\"predicted\":\"Predicted\"},\"models\":{\"title\":\"Model Performance\",\"description\":\"Active prediction models\",\"active\":\"Active\",\"mape\":\"MAPE\",\"accuracy\":\"Accuracy\",\"trained\":\"Trained\",\"justNow\":\"Just now\",\"hoursAgo\":\"{{count}}h ago\",\"daysAgo\":\"{{count}}d ago\"},\"weekdays\":{\"Mon\":\"Mon\",\"Tue\":\"Tue\",\"Wed\":\"Wed\",\"Thu\":\"Thu\",\"Fri\":\"Fri\",\"Sat\":\"Sat\",\"Sun\":\"Sun\"}},\"config\":{\"title\":\"System Configuration\",\"subtitle\":\"Gateway management and protocol mapping\",\"stats\":{\"gatewaysOnline\":\"Gateways Online\",\"activeDevices\":\"Active Devices\",\"dataPoints\":\"Data Points\",\"changeLabel\":\"vs last week\",\"activeAlerts\":\"Active Alerts\"},\"sections\":{\"gatewaysTitle\":\"Gateways\",\"gatewaysDesc\":\"Protocol interfaces\",\"devicesTitle\":\"Registered Devices\",\"devicesDesc\":\"Connected equipment and sensors\",\"mappingTitle\":\"Protocol Mapping\",\"mappingDesc\":\"Point name normalization\",\"alertsTitle\":\"System Alerts\",\"alertsDesc\":\"Connection and data issues\"},\"gateways\":{\"gw-1\":\"Main BACnet Gateway\",\"gw-2\":\"Modbus RTU Gateway\",\"gw-3\":\"MQTT Broker\",\"gw-4\":\"OPC-UA Server\"},\"devices\":{\"dev-1\":\"AHU-1 Controller\",\"dev-2\":\"AHU-2 Controller\",\"dev-3\":\"VAV Box Floor 1\",\"dev-4\":\"Chiller Plant\",\"dev-5\":\"Power Meter Main\",\"dev-6\":\"IoT Sensor Hub\",\"dev-7\":\"Lighting Controller\",\"dev-8\":\"EV Charger Station\"},\"deviceTable\":{\"searchPlaceholder\":\"Search devices...\",\"all\":\"All\",\"headers\":{\"device\":\"Device\",\"gateway\":\"Gateway\",\"address\":\"Address\",\"points\":\"Points\",\"lastReading\":\"Last Reading\",\"status\":\"Status\"},\"status\":{\"active\":\"Active\",\"inactive\":\"Inactive\",\"error\":\"Error\"},\"showing\":\"Showing {{count}} of {{total}} devices\",\"addDevice\":\"Add Device\",\"addNewDevice\":\"Add New Device\",\"addNewDeviceDesc\":\"Register a new device to your monitoring system.\",\"deviceName\":\"Device Name\",\"deviceType\":\"Device Type\",\"selectType\":\"Select type\",\"selectGateway\":\"Select gateway\",\"deviceAddress\":\"Device Address\",\"dataPoints\":\"Data Points\",\"adding\":\"Adding...\",\"deviceDetails\":\"Device Details\",\"deactivate\":\"Deactivate Device\",\"activate\":\"Activate Device\",\"remove\":\"Remove Device\",\"messages\":{\"fillRequired\":\"Please fill in all required fields\",\"added\":\"Device added successfully\",\"removed\":\"Device removed\",\"deactivated\":\"Device deactivated\",\"activated\":\"Device activated\"},\"types\":{\"AHU\":\"Air Handling Unit (AHU)\",\"VAV\":\"Variable Air Volume (VAV)\",\"Chiller\":\"Chiller\",\"Boiler\":\"Boiler\",\"Meter\":\"Energy Meter\",\"Sensor\":\"Sensor\"}},\"alerts\":{\"alert-1\":\"OPC-UA Server connection lost\",\"alert-2\":\"Stale data from Lighting Controller (1h)\",\"alert-3\":\"High data throughput on MQTT Broker\",\"alert-4\":\"Failed authentication attempt from 192.168.1.200\"},\"ui\":{\"online\":\"Online\",\"offline\":\"Offline\",\"error\":\"Error\",\"ago\":\"{{time}} ago\",\"s\":\"s\",\"m\":\"m\",\"h\":\"h\",\"configure\":\"Configure\",\"restart\":\"Restart\",\"restarting\":\"Restarting...\",\"shutdown\":\"Shutdown\",\"start\":\"Start\",\"remove\":\"Remove\",\"addGateway\":\"Add Gateway\",\"modifyGatewayDesc\":\"Modify the gateway configuration.\",\"addGatewayDesc\":\"Add a new gateway to your network.\",\"gatewayName\":\"Gateway Name\",\"protocol\":\"Protocol\",\"ipAddress\":\"IP Address\",\"port\":\"Port\",\"devices\":\"Devices\",\"dataPoints\":\"Data Points\",\"lastSeen\":\"Last Seen\",\"update\":\"Update\",\"add\":\"Add\",\"saving\":\"Saving...\",\"unknown\":\"Unknown\"},\"systemAlerts\":{\"unacknowledged\":\"{{count}} unacknowledged alert\",\"unacknowledgedPlural\":\"{{count}} unacknowledged alerts\",\"acknowledgeAll\":\"Acknowledge All\",\"acknowledge\":\"Acknowledge\",\"dismiss\":\"Dismiss\",\"empty\":\"No active alerts\",\"types\":{\"connection\":\"Connection\",\"data\":\"Data\",\"security\":\"Security\",\"performance\":\"Performance\"}},\"protocolMapping\":{\"title\":\"Protocol Mapping\",\"add\":\"Add Point Mapping\",\"edit\":\"Edit Mapping\",\"new\":\"New Mapping\",\"sourceProtocol\":\"Protocol\",\"sourcePoint\":\"Source Point\",\"targetName\":\"Target Name\",\"unit\":\"Unit\",\"transform\":\"Transform (optional)\",\"save\":\"Save Mapping\",\"saving\":\"Saving...\",\"update\":\"Update\",\"delete\":\"Mapping deleted\",\"added\":\"Mapping added\",\"required\":\"Please fill in all required fields\"}},\"reports\":{\"title\":\"Reports & Analytics\",\"subtitle\":\"ROI analysis and savings reports\",\"savingsChart\":{\"actualSavings\":\"Actual Savings\",\"projected\":\"Projected\",\"cumulative\":\"Cumulative\",\"months\":{\"Jan\":\"Jan\",\"Feb\":\"Feb\",\"Mar\":\"Mar\",\"Apr\":\"Apr\",\"May\":\"May\",\"Jun\":\"Jun\",\"Jul\":\"Jul\",\"Aug\":\"Aug\",\"Sep\":\"Sep\",\"Oct\":\"Oct\",\"Nov\":\"Nov\",\"Dec\":\"Dec\"}},\"stats\":{\"totalSavingsYTD\":\"Total Savings (YTD)\",\"energyReduction\":\"Energy Reduction\",\"carbonOffset\":\"Carbon Offset\",\"paybackPeriod\":\"Payback Period\",\"vsLastYear\":\"vs last year\",\"vsBaseline\":\"vs baseline\",\"co2eAvoided\":\"CO2e avoided\",\"roi\":\"ROI\"},\"sections\":{\"monthlySavingsTrend\":\"Monthly Savings Trend\",\"monthlySavingsTrendDesc\":\"Energy cost savings over time\",\"roiCalculator\":\"ROI Calculator\",\"roiCalculatorDesc\":\"Investment return analysis\",\"monthlyEnergyComparison\":\"Monthly Energy Comparison\",\"monthlyEnergyComparisonDesc\":\"This year vs baseline\",\"carbonImpact\":\"Carbon Impact\",\"carbonImpactDesc\":\"Environmental metrics\",\"exportReports\":\"Export Reports\",\"exportReportsDesc\":\"Download data and reports\"},\"roi\":{\"initialInvestment\":\"Initial Investment\",\"annualSavings\":\"Annual Savings\",\"paybackPeriod\":\"Payback Period\",\"roi5Year\":\"5-Year ROI\",\"npv5Year\":\"5-Year NPV\",\"total5YearSavings\":\"Total 5-Year Savings\",\"years\":\"years\"},\"carbon\":{\"annualGoal\":\"Annual Carbon Goal\",\"goalProgress\":\"{{current}} of {{total}} tons target\",\"co2Avoided\":\"CO2 Avoided\",\"treesEquivalent\":\"Trees Equivalent\",\"carsOffRoad\":\"Cars Off Road\",\"cleanEnergy\":\"Clean Energy %\",\"treesPerYear\":\"trees/year\",\"vehicles\":\"vehicles\"},\"export\":{\"reportPeriod\":\"Report Period\",\"periods\":{\"month\":\"This Month\",\"quarter\":\"This Quarter\",\"ytd\":\"Year to Date\",\"custom\":\"Custom Range\"},\"exportPdf\":\"Export as PDF\",\"exportExcel\":\"Export as Excel\",\"downloadRaw\":\"Download Raw Data\",\"generating\":\"Generating {{format}}...\",\"generated\":\"{{format}} report generated\",\"downloadStart\":\"Download will start automatically\",\"open\":\"Open\",\"opening\":\"Opening file...\",\"scheduleMonthly\":\"Schedule Monthly Report\",\"scheduleTitle\":\"Schedule Automatic Reports\",\"scheduleDesc\":\"Set up automatic report delivery to your email.\",\"emailAddress\":\"Email Address\",\"frequency\":\"Frequency\",\"frequencies\":{\"weekly\":\"Weekly\",\"biweekly\":\"Bi-weekly\",\"monthly\":\"Monthly\",\"quarterly\":\"Quarterly\"},\"reportIncludes\":\"Reports will include: Energy consumption summary, cost analysis, savings breakdown, and optimization recommendations.\",\"schedule\":\"Schedule Reports\",\"scheduling\":\"Scheduling...\",\"enterEmail\":\"Please enter an email address\",\"scheduledSuccess\":\"Report scheduled successfully\",\"scheduledDesc\":\"{{frequency}} reports will be sent to {{email}}\"},\"comparison\":{\"baseline\":\"Baseline Year\",\"current\":\"Current Year\",\"averageBaseline\":\"Average Baseline\",\"tooltipBaseline\":\"Baseline\",\"tooltipCurrent\":\"Current\"}}}"));}),
"[project]/lib/i18n/locales/zh.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"common\":{\"settings\":\"设置\",\"save\":\"保存\",\"cancel\":\"取消\",\"language\":\"语言\",\"theme\":\"主题\",\"role\":\"角色\",\"loading\":\"加载中...\",\"error\":\"错误\",\"success\":\"成功\",\"na\":\"暂无数据\",\"viewDetails\":\"查看详情\",\"share\":\"分享\",\"departments\":{\"facilitiesManagement\":\"设施运维\",\"gridOperations\":\"电网运营\"},\"units\":{\"kw\":\"kW\",\"kwh\":\"kWh\",\"f\":\"°F\",\"c\":\"°C\",\"percentage\":\"%\",\"currency\":\"￥\",\"tons\":\"吨\"},\"loadTypes\":{\"HVAC\":\"暖通空调\",\"Lighting\":\"照明\",\"Equipment\":\"设备\",\"IT Systems\":\"IT 系统\",\"Other\":\"其他\"}},\"languages\":{\"en\":\"英文\",\"zh\":\"中文\"},\"nav\":{\"overview\":\"总览\",\"predictions\":\"AI 预测\",\"grid\":\"电网交互\",\"buildings\":\"建筑\",\"config\":\"配置\",\"reports\":\"报表\",\"settings\":\"设置\"},\"roles\":{\"facilityManager\":\"设施经理\",\"utilityRep\":\"电力公司代表\",\"bob\":\"Bob\",\"alice\":\"Alice\",\"facilityManagerDesc\":\"管理建筑与设备\",\"utilityRepDesc\":\"监控电网与 DR 项目\"},\"theme\":{\"light\":\"亮色\",\"dark\":\"暗色\",\"system\":\"跟随系统\"},\"settings\":{\"title\":\"设置\",\"subtitle\":\"管理你的偏好与账号设置\",\"appearance\":\"外观\",\"appearanceDesc\":\"自定义界面风格\",\"language\":\"语言\",\"languageDesc\":\"选择界面语言\",\"themeDesc\":\"选择配色方案\",\"notifications\":\"通知\",\"notificationsDesc\":\"设置通知偏好\",\"profile\":\"个人资料\",\"profileDesc\":\"更新个人信息\",\"roleDesc\":\"切换用户视角\",\"emailNotifications\":\"邮件通知\",\"emailNotificationsDesc\":\"通过邮件接收重要更新\",\"pushNotifications\":\"推送通知\",\"pushNotificationsDesc\":\"浏览器推送提醒\",\"drAlerts\":\"DR 事件提醒\",\"drAlertsDesc\":\"需求响应事件通知\",\"systemAlerts\":\"系统告警\",\"systemAlertsDesc\":\"系统与设备告警\",\"displayName\":\"显示名称\",\"email\":\"邮箱\",\"phone\":\"电话\",\"department\":\"部门\",\"profileSaved\":\"资料已保存\"},\"header\":{\"searchPlaceholder\":\"搜索…(Ctrl/Cmd+K)\",\"live\":\"实时\",\"notifications\":\"通知\",\"markAllRead\":\"全部标记已读\",\"noNotifications\":\"暂无通知\",\"ptsPerSec\":\"点/秒\",\"noResults\":\"未找到结果\",\"navigateTitle\":\"正在跳转到 {{item}}\",\"navigateDesc\":\"已选择搜索结果\",\"search\":{\"buildings\":\"建筑\",\"equipment\":\"设备\",\"pages\":\"页面\"},\"notificationsData\":{\"drEvent\":{\"title\":\"DR 事件即将开始\",\"desc\":\"容量类 DR 事件 30 分钟后开始\"},\"highUsage\":{\"title\":\"能耗过高\",\"desc\":\"理科楼超出阈值\"},\"optimization\":{\"title\":\"优化已执行\",\"desc\":\"空调预冷完成\"}}},\"dashboard\":{\"title\":\"园区总览\",\"subtitle\":\"实时能耗监控与调控\",\"totalLoad\":\"园区总负荷\",\"gridUtilization\":\"电网利用率\",\"todaysSavings\":\"今日节省\",\"carbonOffset\":\"碳减排\",\"vsYesterday\":\"较昨日\",\"vsAvg\":\"较平均\",\"thisMonth\":\"本月\",\"energyConsumption\":\"能耗曲线\",\"energyConsumptionDesc\":\"24 小时趋势与 AI 预测\",\"actual\":\"实际\",\"predicted\":\"预测\",\"demandResponse\":\"需求响应\",\"campusMap\":\"园区地图\",\"campusMapDesc\":\"建筑状态与负荷分布\",\"campusMapUI\":{\"overview\":\"园区总览 - 实时\",\"totalLoad\":\"总负荷\",\"tooltip\":{\"load\":\"负荷\",\"temperature\":\"温度\",\"hvac\":\"暖通\",\"status\":\"状态\"},\"legend\":{\"title\":\"状态\",\"normal\":\"正常\",\"warning\":\"预警\",\"critical\":\"严重\",\"drActive\":\"DR 激活\"}},\"loadBreakdown\":\"负荷占比\",\"drStatus\":{\"activeEvent\":\"进行中的 DR 事件\",\"pending\":\"待开始\",\"completed\":\"已完成\",\"reductionProgress\":\"减载进度\",\"eventProgress\":\"事件进度\",\"upcomingEvents\":\"即将开始的事件\",\"event\":\"事件\"},\"energyChart\":{\"live\":\"实时\",\"peak\":\"峰值\",\"actual\":\"实际\",\"predicted\":\"预测\",\"peakThreshold\":\"峰值阈值\"}},\"auth\":{\"login\":\"登录\",\"logout\":\"退出登录\",\"register\":\"注册\",\"email\":\"邮箱\",\"password\":\"密码\",\"confirmPassword\":\"确认密码\",\"name\":\"姓名\",\"namePlaceholder\":\"请输入姓名\",\"rememberMe\":\"记住我\",\"welcomeBack\":\"欢迎回来\",\"loginSubtitle\":\"登录以继续使用\",\"createAccount\":\"创建账号\",\"registerSubtitle\":\"开始体验 Smart Watt\",\"orQuickDemo\":\"或快速体验\",\"noAccount\":\"还没有账号？\",\"hasAccount\":\"已有账号？\",\"loggingIn\":\"登录中...\",\"registering\":\"注册中...\",\"loginFailed\":\"登录失败\",\"registerFailed\":\"注册失败\",\"passwordMismatch\":\"两次输入的密码不一致\",\"passwordTooShort\":\"密码至少 4 个字符\",\"selectRole\":\"选择你的角色\",\"guest\":\"访客\",\"brandTagline\":\"智能能源管理平台\",\"brandDescription\":\"AI 驱动的校园能源与电网互动平台，优化用能、降低成本、助力可持续。\",\"copyright\":\"© 2024 Smart Watt. 保留所有权利。\"},\"errors\":{\"forbidden\":\"拒绝访问\",\"forbiddenDesc\":\"你没有访问该页面的权限。如有疑问请联系管理员。\",\"goHome\":\"返回首页\",\"goBack\":\"返回上一页\"},\"buildings\":{\"title\":\"建筑\",\"subtitle\":\"监测并控制单体建筑\",\"card\":{\"status\":{\"normal\":\"正常\",\"warning\":\"预警\",\"critical\":\"严重\",\"dr-active\":\"DR 激活\"},\"load\":\"负荷\",\"hvac\":\"暖通\",\"viewDetails\":\"查看详情\"},\"types\":{\"academic\":\"教学科研\",\"residential\":\"宿舍\",\"admin\":\"行政\",\"sports\":\"体育\",\"library\":\"图书馆\"},\"names\":{\"eng-1\":\"工程馆\",\"sci-1\":\"理科中心\",\"lib-1\":\"主图书馆\",\"res-1\":\"北区宿舍\",\"res-2\":\"南区宿舍\",\"admin-1\":\"行政楼\",\"gym-1\":\"体育综合馆\"}},\"status\":{\"on\":\"开启\",\"off\":\"关闭\",\"eco\":\"节能\",\"online\":\"在线\",\"offline\":\"离线\",\"active\":\"启用\",\"inactive\":\"未启用\",\"error\":\"错误\",\"running\":\"运行中\",\"idle\":\"空闲\",\"maintenance\":\"维护中\",\"fault\":\"故障\"},\"grid\":{\"title\":\"电网交互\",\"subtitle\":\"需求响应与电力协调\",\"stats\":{\"activeEvent\":\"进行中的 DR 事件\",\"capacityConstraint\":\"容量约束\",\"currentPrice\":\"当前电价\",\"priceChange\":\"高于均值\",\"ytdRevenue\":\"年度至今回报\",\"vsLastYear\":\"较去年\",\"automation\":\"自动化已启用\",\"automationDesc\":\"条规则\",\"todayTriggers\":\"今日触发 2 次\"},\"sections\":{\"signalsTitle\":\"电网信号\",\"signalsDesc\":\"实时电力公司通知\",\"priceTitle\":\"电价曲线\",\"priceDesc\":\"24 小时价格历史与预测\",\"priceLegendCurrent\":\"当前价格\",\"priceLegendAverage\":\"平均值\",\"programsTitle\":\"需求响应项目\",\"programsDesc\":\"已报名项目与表现\",\"revenueTitle\":\"收益概览\",\"revenueDesc\":\"DR 项目收益\",\"automationTitle\":\"自动化规则\",\"automationDesc\":\"自动响应配置\"},\"price\":{\"avgLabel\":\"均值\",\"tooltipLabel\":\"当前价格\",\"averageLine\":\"平均值\"},\"programCard\":{\"programLabel\":\"项目\",\"enrolled\":\"已报名\",\"notEnrolled\":\"未报名\",\"commitment\":\"承诺量\",\"ytdRevenue\":\"年度收益\",\"events\":\"事件数\",\"performance\":\"履约率\"},\"ui\":{\"receiving\":\"接收电网信号中...\",\"allHandled\":\"全部信号已处理\",\"responded\":\"已响应\",\"respond\":\"响应\",\"dismiss\":\"忽略\",\"signalDetails\":\"信号详情\",\"recommendedActions\":\"推荐措施\",\"executeResponse\":\"执行响应\",\"initiating\":\"正在发起响应...\",\"initiatingDesc\":\"针对 {{type}} 信号执行预案\",\"responseSuccess\":\"响应执行成功\",\"responseSuccessDesc\":\"已完成 {{type}} 信号的自动化\",\"dismissed\":\"信号已忽略\",\"timeRemaining\":\"剩余时间\",\"expired\":\"已过期\",\"remaining\":\"剩余\",\"priceMultiplier\":\"价格倍数\",\"signalType\":\"{{type}} 信号\",\"severityLabel\":\"严重级别\"},\"signals\":{\"sig-1\":\"高电价时段即将开始\",\"sig-2\":\"可利用的高额光伏出力\",\"sig-3\":\"电网容量受限 - 触发 DR 事件\"},\"programs\":{\"prog-1\":\"削峰需求响应\",\"prog-2\":\"紧急减载\",\"prog-3\":\"实时电价\",\"prog-4\":\"调频辅助服务\"},\"types\":{\"price\":\"价格\",\"emergency\":\"紧急\",\"capacity\":\"容量\",\"renewable\":\"可再生\"},\"severity\":{\"info\":\"提示\",\"warning\":\"预警\",\"critical\":\"严重\"},\"actions\":{\"price\":{\"1\":\"减少非必要负荷\",\"2\":\"推迟可灵活作业\",\"3\":\"条件允许时提前预冷/预热\"},\"emergency\":{\"1\":\"立即减载非关键负荷\",\"2\":\"启动紧急预案\",\"3\":\"通知设施经理\"},\"capacity\":{\"1\":\"参与需求响应\",\"2\":\"下调暖通设定值\",\"3\":\"转移可柔性负荷\"},\"renewable\":{\"1\":\"尽量提高消纳\",\"2\":\"充电储能\",\"3\":\"运行可延迟负荷\"}},\"rules\":{\"rule-1\":{\"name\":\"高价响应\",\"trigger\":\"电价 > $0.15/kWh\",\"action\":\"暖通降 20%，照明调至 70%\"},\"rule-2\":{\"name\":\"DR 自动接受\",\"trigger\":\"收到 DR 信号\",\"action\":\"激励超过 $200 自动报名\"},\"rule-3\":{\"name\":\"紧急减载\",\"trigger\":\"电网紧急信号\",\"action\":\"立即切除非关键负荷\"},\"rule-4\":{\"name\":\"绿能优先\",\"trigger\":\"可再生出力充足\",\"action\":\"将可延迟负荷转移至当前时段\"}},\"revenue\":{\"programsEnrolled\":\"已报名项目数\",\"ytd\":\"年度收益\",\"estimator\":\"收益测算\",\"commitmentLabel\":\"承诺量 (kW)\",\"eventsLabel\":\"预计事件/年\",\"projectedAnnual\":\"预计年收益\",\"projectedFootnote\":\"基于历史项目数据\"},\"automation\":{\"addRule\":\"新增自动化规则\",\"editRule\":\"编辑自动化规则\",\"newRule\":\"新建自动化规则\",\"descriptionEdit\":\"修改规则设置。\",\"descriptionNew\":\"创建针对电网事件的自动响应。\",\"ruleName\":\"规则名称\",\"trigger\":\"触发条件\",\"action\":\"执行动作\",\"last\":\"最近：\",\"executions\":\"次执行\",\"never\":\"从未\",\"ruleActivated\":\"规则已启用\",\"ruleDeactivated\":\"规则已停用\",\"ruleDeleted\":\"规则已删除\",\"fillRequired\":\"请填写完整\",\"saving\":\"保存中...\",\"update\":\"更新\",\"create\":\"创建\",\"triggers\":{\"DR_SIGNAL_RECEIVED\":\"收到 DR 信号\",\"PRICE_ABOVE_THRESHOLD\":\"价格高于阈值\",\"PEAK_DEMAND_ALERT\":\"峰值预警\",\"SCHEDULE_TIME\":\"定时触发\",\"GRID_EMERGENCY\":\"电网紧急\"}}},\"predictions\":{\"title\":\"AI 预测中心\",\"subtitle\":\"机器学习驱动的能耗预测\",\"suggestions\":{\"opt-1\":{\"title\":\"高峰前预冷理科中心\",\"desc\":\"6 点而非 8 点开始制冷，把负荷转移到低谷时段。\"},\"opt-2\":{\"title\":\"空置区域降低照明\",\"desc\":\"传感器显示主图书馆 40% 区域空置，调光至 30%。\"},\"opt-3\":{\"title\":\"将充电移至夜间\",\"desc\":\"当前电动车充电与峰时重合，改为夜间可每天节省约 $180。\"},\"opt-4\":{\"title\":\"优化体育馆暖通时程\",\"desc\":\"依据热惰性提前 2 小时回温，减少闭馆前能耗。\"}},\"ui\":{\"analyzing\":\"AI 正在分析 {{count}} 条优化机会\",\"savings\":\"节省：\",\"confidence\":\"可信度：\",\"apply\":\"应用\",\"applying\":\"应用中...\",\"generateMore\":\"生成更多建议\",\"generating\":\"生成中...\",\"perDay\":\"/天\"},\"priority\":{\"high\":\"高\",\"medium\":\"中\",\"low\":\"低\"},\"sections\":{\"optimizationsTitle\":\"AI 优化建议\",\"optimizationsDesc\":\"智能降本推荐\"},\"stats\":{\"accuracy\":\"预测准确率\",\"vsLastWeek\":\"较上周\",\"peakForecast\":\"峰值预测\",\"todayWindow\":\"今日 14:00-16:00\",\"potentialSavings\":\"潜在节省\",\"ifOptimized\":\"优化后\",\"activeModels\":\"在用模型\",\"primaryModel\":\"主模型 LSTM\"},\"chart\":{\"title\":\"24 小时负荷预测\",\"description\":\"历史数据与 AI 预测（含置信区间）\",\"legendActual\":\"实际\",\"legendPredicted\":\"预测\",\"legendCI\":\"95% 区间\",\"now\":\"现在\",\"modelBadge\":\"LSTM 模型\",\"peak\":\"峰值\"},\"weekly\":{\"title\":\"一周预测\",\"description\":\"每日能耗预测\",\"lastWeek\":\"上周\",\"predicted\":\"预测\"},\"models\":{\"title\":\"模型表现\",\"description\":\"在用预测模型\",\"active\":\"激活\",\"mape\":\"MAPE\",\"accuracy\":\"准确率\",\"trained\":\"训练时间\",\"justNow\":\"刚刚\",\"hoursAgo\":\"{{count}} 小时前\",\"daysAgo\":\"{{count}} 天前\"},\"weekdays\":{\"Mon\":\"周一\",\"Tue\":\"周二\",\"Wed\":\"周三\",\"Thu\":\"周四\",\"Fri\":\"周五\",\"Sat\":\"周六\",\"Sun\":\"周日\"}},\"config\":{\"title\":\"系统配置\",\"subtitle\":\"网关管理与协议映射\",\"stats\":{\"gatewaysOnline\":\"在线网关\",\"activeDevices\":\"在用设备\",\"dataPoints\":\"数据点数\",\"changeLabel\":\"较上周\",\"activeAlerts\":\"活跃告警\"},\"sections\":{\"gatewaysTitle\":\"网关\",\"gatewaysDesc\":\"协议接口\",\"devicesTitle\":\"已注册设备\",\"devicesDesc\":\"已连接的设备与传感器\",\"mappingTitle\":\"协议映射\",\"mappingDesc\":\"点位名称归一化\",\"alertsTitle\":\"系统告警\",\"alertsDesc\":\"连接与数据问题\"},\"gateways\":{\"gw-1\":\"主 BACnet 网关\",\"gw-2\":\"Modbus RTU 网关\",\"gw-3\":\"MQTT Broker\",\"gw-4\":\"OPC-UA 服务器\"},\"devices\":{\"dev-1\":\"AHU-1 控制器\",\"dev-2\":\"AHU-2 控制器\",\"dev-3\":\"一层 VAV 箱\",\"dev-4\":\"冷机房\",\"dev-5\":\"总进线电表\",\"dev-6\":\"IoT 传感器集线器\",\"dev-7\":\"照明控制器\",\"dev-8\":\"充电桩\"},\"deviceTable\":{\"searchPlaceholder\":\"搜索设备...\",\"all\":\"全部\",\"headers\":{\"device\":\"设备\",\"gateway\":\"网关\",\"address\":\"地址\",\"points\":\"点位\",\"lastReading\":\"最近读取\",\"status\":\"状态\"},\"status\":{\"active\":\"在线\",\"inactive\":\"离线\",\"error\":\"故障\"},\"showing\":\"显示 {{count}} / {{total}} 台设备\",\"addDevice\":\"新增设备\",\"addNewDevice\":\"添加新设备\",\"addNewDeviceDesc\":\"将新设备注册到监控系统。\",\"deviceName\":\"设备名称\",\"deviceType\":\"设备类型\",\"selectType\":\"选择类型\",\"selectGateway\":\"选择网关\",\"deviceAddress\":\"设备地址\",\"dataPoints\":\"数据点\",\"adding\":\"添加中...\",\"deviceDetails\":\"设备详情\",\"deactivate\":\"停用设备\",\"activate\":\"启用设备\",\"remove\":\"删除设备\",\"messages\":{\"fillRequired\":\"请填写所有必填项\",\"added\":\"设备添加成功\",\"removed\":\"设备已删除\",\"deactivated\":\"设备已停用\",\"activated\":\"设备已启用\"},\"types\":{\"AHU\":\"空气处理机 (AHU)\",\"VAV\":\"可变风量箱 (VAV)\",\"Chiller\":\"冷机\",\"Boiler\":\"锅炉\",\"Meter\":\"电表\",\"Sensor\":\"传感器\"}},\"alerts\":{\"alert-1\":\"OPC-UA 连接丢失\",\"alert-2\":\"照明控制器数据陈旧 (1h)\",\"alert-3\":\"MQTT Broker 吞吐异常\",\"alert-4\":\"来自 192.168.1.200 的认证失败\"},\"ui\":{\"online\":\"在线\",\"offline\":\"离线\",\"error\":\"错误\",\"ago\":\"{{time}} 前\",\"s\":\"秒\",\"m\":\"分\",\"h\":\"小时\",\"configure\":\"配置\",\"restart\":\"重启\",\"restarting\":\"重启中...\",\"shutdown\":\"关停\",\"start\":\"启动\",\"remove\":\"删除\",\"addGateway\":\"新增网关\",\"modifyGatewayDesc\":\"修改网关配置。\",\"addGatewayDesc\":\"将新网关加入网络。\",\"gatewayName\":\"网关名称\",\"protocol\":\"协议\",\"ipAddress\":\"IP 地址\",\"port\":\"端口\",\"devices\":\"设备\",\"dataPoints\":\"数据点\",\"lastSeen\":\"上次在线\",\"update\":\"更新\",\"add\":\"添加\",\"saving\":\"保存中...\",\"unknown\":\"未知\"},\"systemAlerts\":{\"unacknowledged\":\"{{count}} 条未确认告警\",\"unacknowledgedPlural\":\"{{count}} 条未确认告警\",\"acknowledgeAll\":\"全部确认\",\"acknowledge\":\"确认\",\"dismiss\":\"忽略\",\"empty\":\"暂无告警\",\"types\":{\"connection\":\"连接\",\"data\":\"数据\",\"security\":\"安全\",\"performance\":\"性能\"}},\"protocolMapping\":{\"title\":\"协议映射\",\"add\":\"添加点位映射\",\"edit\":\"编辑映射\",\"new\":\"新建映射\",\"sourceProtocol\":\"协议\",\"sourcePoint\":\"源点位\",\"targetName\":\"目标名称\",\"unit\":\"单位\",\"transform\":\"转换公式 (可选)\",\"save\":\"保存映射\",\"saving\":\"保存中...\",\"update\":\"更新\",\"delete\":\"映射已删除\",\"added\":\"映射已添加\",\"required\":\"请填写必填项\"}},\"reports\":{\"title\":\"报表与分析\",\"subtitle\":\"ROI 分析与节省报告\",\"savingsChart\":{\"actualSavings\":\"实际节省\",\"projected\":\"预测\",\"cumulative\":\"累计\",\"months\":{\"Jan\":\"1月\",\"Feb\":\"2月\",\"Mar\":\"3月\",\"Apr\":\"4月\",\"May\":\"5月\",\"Jun\":\"6月\",\"Jul\":\"7月\",\"Aug\":\"8月\",\"Sep\":\"9月\",\"Oct\":\"10月\",\"Nov\":\"11月\",\"Dec\":\"12月\"}},\"stats\":{\"totalSavingsYTD\":\"年初至今节省\",\"energyReduction\":\"能耗降低\",\"carbonOffset\":\"碳减排\",\"paybackPeriod\":\"回收期\",\"vsLastYear\":\"较去年\",\"vsBaseline\":\"较基线\",\"co2eAvoided\":\"避免的 CO2e\",\"roi\":\"投资回报\"},\"sections\":{\"monthlySavingsTrend\":\"月度节省趋势\",\"monthlySavingsTrendDesc\":\"能耗成本随时间变化\",\"roiCalculator\":\"ROI 计算器\",\"roiCalculatorDesc\":\"投资回报分析\",\"monthlyEnergyComparison\":\"月度能耗对比\",\"monthlyEnergyComparisonDesc\":\"今年 vs 基线\",\"carbonImpact\":\"碳影响\",\"carbonImpactDesc\":\"环保指标\",\"exportReports\":\"导出报告\",\"exportReportsDesc\":\"下载数据与报告\"},\"roi\":{\"initialInvestment\":\"初始投资\",\"annualSavings\":\"年度节省\",\"paybackPeriod\":\"回收期\",\"roi5Year\":\"5 年 ROI\",\"npv5Year\":\"5 年 NPV\",\"total5YearSavings\":\"5 年总节省\",\"years\":\"年\"},\"carbon\":{\"annualGoal\":\"年度碳目标\",\"goalProgress\":\"目标 {{total}} 吨，已完成 {{current}}\",\"co2Avoided\":\"避免排放\",\"treesEquivalent\":\"折合植树\",\"carsOffRoad\":\"减少车辆\",\"cleanEnergy\":\"清洁能源占比\",\"treesPerYear\":\"棵/年\",\"vehicles\":\"辆\"},\"export\":{\"reportPeriod\":\"报告周期\",\"periods\":{\"month\":\"本月\",\"quarter\":\"本季度\",\"ytd\":\"年初至今\",\"custom\":\"自定义区间\"},\"exportPdf\":\"导出 PDF\",\"exportExcel\":\"导出 Excel\",\"downloadRaw\":\"下载原始数据\",\"generating\":\"正在生成 {{format}}...\",\"generated\":\"{{format}} 报告已生成\",\"downloadStart\":\"下载将自动开始\",\"open\":\"打开\",\"opening\":\"正在打开文件...\",\"scheduleMonthly\":\"定期推送报告\",\"scheduleTitle\":\"安排自动发送\",\"scheduleDesc\":\"设置定期将报告发送到邮箱。\",\"emailAddress\":\"邮箱地址\",\"frequency\":\"频率\",\"frequencies\":{\"weekly\":\"每周\",\"biweekly\":\"每两周\",\"monthly\":\"每月\",\"quarterly\":\"每季度\"},\"reportIncludes\":\"报告包含：能耗摘要、成本分析、节省拆解与优化建议。\",\"schedule\":\"安排发送\",\"scheduling\":\"安排中...\",\"enterEmail\":\"请输入邮箱地址\",\"scheduledSuccess\":\"已成功安排\",\"scheduledDesc\":\"{{frequency}} 报告将发送至 {{email}}\"},\"comparison\":{\"baseline\":\"基线年份\",\"current\":\"本年\",\"averageBaseline\":\"平均基线\",\"tooltipBaseline\":\"基线\",\"tooltipCurrent\":\"当前\"}}}"));}),
"[project]/lib/i18n/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/locales/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$zh$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/locales/zh.json (json)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
    resources: {
        en: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$en$2e$json__$28$json$29$__["default"]
        },
        zh: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$zh$2e$json__$28$json$29$__["default"]
        }
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: [
            'localStorage',
            'navigator'
        ],
        caches: [
            'localStorage'
        ],
        lookupLocalStorage: 'smartwatt-language'
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/lib/i18n/i18n-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/index.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function I18nProvider({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/lib/mock-users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findUserByEmail",
    ()=>findUserByEmail,
    "getDemoUser",
    ()=>getDemoUser,
    "mockUsers",
    ()=>mockUsers,
    "validateCredentials",
    ()=>validateCredentials
]);
const mockUsers = [
    {
        id: "1",
        email: "bob@smartwatt.com",
        password: "demo",
        name: "Bob",
        role: "facility-manager"
    },
    {
        id: "2",
        email: "alice@smartwatt.com",
        password: "demo",
        name: "Alice",
        role: "utility-rep"
    }
];
function findUserByEmail(email) {
    return mockUsers.find((user)=>user.email.toLowerCase() === email.toLowerCase());
}
function validateCredentials(email, password) {
    const mockUser = findUserByEmail(email);
    if (mockUser && mockUser.password === password) {
        const { password: _, ...user } = mockUser;
        return user;
    }
    return null;
}
function getDemoUser(role) {
    const mockUser = mockUsers.find((user)=>user.role === role);
    const { password: _, ...user } = mockUser;
    return user;
}
}),
"[project]/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-users.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AUTH_STORAGE_KEY = "smartwatt-auth";
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load user from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
            if (savedAuth) {
                const parsedUser = JSON.parse(savedAuth);
                setUser(parsedUser);
            }
        } catch (error) {
            console.error("Failed to load auth state:", error);
            localStorage.removeItem(AUTH_STORAGE_KEY);
        } finally{
            setIsLoading(false);
        }
    }, []);
    const saveUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((user)=>{
        setUser(user);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    }, []);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password)=>{
        // Simulate network delay
        await new Promise((resolve)=>setTimeout(resolve, 500));
        const validatedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCredentials"])(email, password);
        if (validatedUser) {
            saveUser(validatedUser);
            return {
                success: true
            };
        }
        return {
            success: false,
            error: "Invalid email or password"
        };
    }, [
        saveUser
    ]);
    const loginAsDemo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((role)=>{
        const demoUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDemoUser"])(role);
        saveUser(demoUser);
        router.push("/");
    }, [
        saveUser,
        router
    ]);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (name, email, password, role)=>{
        // Simulate network delay
        await new Promise((resolve)=>setTimeout(resolve, 500));
        // Check if email already exists (mock validation)
        const existingEmails = [
            "bob@smartwatt.com",
            "alice@smartwatt.com"
        ];
        if (existingEmails.includes(email.toLowerCase())) {
            return {
                success: false,
                error: "Email already registered"
            };
        }
        // Create new user (in a real app, this would be saved to a database)
        const newUser = {
            id: `user-${Date.now()}`,
            email,
            name,
            role
        };
        saveUser(newUser);
        return {
            success: true
        };
    }, [
        saveUser
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUser(null);
        localStorage.removeItem(AUTH_STORAGE_KEY);
        router.push("/login");
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated: !!user,
            isLoading,
            login,
            loginAsDemo,
            register,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/auth-context.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/lib/role-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleProvider",
    ()=>RoleProvider,
    "useRole",
    ()=>useRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const RoleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function RoleProvider({ children }) {
    const { user, loginAsDemo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // Default to facility-manager if no user is logged in
    const role = user?.role || "facility-manager";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleContext.Provider, {
        value: {
            role,
            isBob: role === "facility-manager",
            isAlice: role === "utility-rep",
            setRole: loginAsDemo
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/role-context.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function useRole() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(RoleContext);
    if (context === undefined) {
        throw new Error("useRole must be used within a RoleProvider");
    }
    return context;
}
}),
"[project]/lib/mobile-nav-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNavProvider",
    ()=>MobileNavProvider,
    "useMobileNav",
    ()=>useMobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MobileNavContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function MobileNavProvider({ children }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggle = ()=>setIsOpen((prev)=>!prev);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNavContext.Provider, {
        value: {
            isOpen,
            setIsOpen,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/mobile-nav-context.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function useMobileNav() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MobileNavContext);
    if (context === undefined) {
        throw new Error("useMobileNav must be used within a MobileNavProvider");
    }
    return context;
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SheetContent({ className, children, side = 'right', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/layout/mobile-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileSidebar",
    ()=>MobileSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/role-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mobile$2d$nav$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mobile-nav-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-chart-column-increasing.js [app-ssr] (ecmascript) <export default as FileBarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-ssr] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const navItems = [
    {
        titleKey: "nav.overview",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        roles: [
            "facility-manager",
            "utility-rep"
        ]
    },
    {
        titleKey: "nav.predictions",
        href: "/predictions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        roles: [
            "facility-manager",
            "utility-rep"
        ]
    },
    {
        titleKey: "nav.grid",
        href: "/grid",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        roles: [
            "facility-manager",
            "utility-rep"
        ]
    },
    {
        titleKey: "nav.buildings",
        href: "/buildings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        roles: [
            "facility-manager"
        ]
    },
    {
        titleKey: "nav.config",
        href: "/config",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        roles: [
            "facility-manager"
        ]
    },
    {
        titleKey: "nav.reports",
        href: "/reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart$3e$__["FileBarChart"],
        roles: [
            "facility-manager",
            "utility-rep"
        ]
    },
    {
        titleKey: "nav.settings",
        href: "/settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"],
        roles: [
            "facility-manager",
            "utility-rep"
        ]
    }
];
function MobileSidebar() {
    const { role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$role$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRole"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isOpen, setIsOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mobile$2d$nav$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMobileNav"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    if (!user) return null;
    const filteredNavItems = navItems.filter((item)=>item.roles.includes(role));
    const handleNavClick = ()=>{
        setIsOpen(false);
    };
    const handleLogout = ()=>{
        setIsOpen(false);
        logout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
        open: isOpen,
        onOpenChange: setIsOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
            side: "left",
            className: "w-[280px] p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "p-4 border-b",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-5 h-5 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-lg",
                                children: "Smart Watt"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/mobile-sidebar.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-5 h-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium truncate",
                                        children: user?.name || t('auth.guest')
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground truncate",
                                        children: role === "facility-manager" ? t('roles.facilityManager') : t('roles.utilityRep')
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/mobile-sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex-1 p-4 space-y-1",
                    children: filteredNavItems.map((item)=>{
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: handleNavClick,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-3 h-11 rounded-lg transition-colors", isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: t(item.titleKey)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/layout/mobile-sidebar.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t mt-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        className: "w-full justify-start text-muted-foreground hover:text-foreground",
                        onClick: handleLogout,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/mobile-sidebar.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            t('auth.logout')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/mobile-sidebar.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/mobile-sidebar.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/mobile-sidebar.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/mobile-sidebar.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b6bb8cd8._.js.map