(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{11:function(e,t,n){e.exports={container:"GameOver_container__1S-s0",leftSide:"GameOver_leftSide__1njYB",handImgWrapper:"GameOver_handImgWrapper__nsLDW",handImg:"GameOver_handImg__kvX5S",rightSide:"GameOver_rightSide__uitiH",subTitle:"GameOver_subTitle__ro6NN",title:"GameOver_title__2LfHt",animated1:"GameOver_animated1__2rgr7"}},13:function(e,t,n){e.exports={container:"GameStart_container__2Rl99",inner:"GameStart_inner__1ZtLv",leftSide:"GameStart_leftSide__1W159",handImgWrapper:"GameStart_handImgWrapper__F5lNH",handImg:"GameStart_handImg__xUIFC",rightSide:"GameStart_rightSide__3HbIo",title:"GameStart_title__18bWK"}},16:function(e,t,n){e.exports={game:"Game_game__1kLUZ",main:"Game_main__2FcSi",questionTitle:"Game_questionTitle__3PVxK",answersBlock:"Game_answersBlock__E7P3N"}},22:function(e,t,n){e.exports={btnBig:"OrangeButton_btnBig__3nkbQ",title:"OrangeButton_title__1MPP3"}},26:function(e,t,n){e.exports={layout:"Layout_layout__39k8b"}},29:function(e,t,n){e.exports={sideBar:"SideBar_sideBar__36gbS"}},35:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(19),o=n.n(i),r=(n(35),n(26)),s=n.n(r),c=n(1),l=function(e){var t=e.children;return Object(c.jsx)("div",{className:s.a.layout,children:t})},h=n(17),u=n(2),d=n(13),m=n.n(d),_=n.p+"static/media/hand1.db4d6f4e.png",f=n(22),b=n.n(f),g=function(e){var t=e.children,n=e.path;return Object(c.jsx)(h.b,{to:n,className:b.a.btnBig,children:Object(c.jsx)("div",{className:b.a.title,children:t})})},p=function(){return Object(c.jsxs)("main",{className:m.a.container,children:[Object(c.jsx)("section",{className:m.a.leftSide,children:Object(c.jsx)("div",{className:m.a.handImgWrapper,children:Object(c.jsx)("img",{src:_,alt:"hand",className:m.a.handImg})})}),Object(c.jsxs)("section",{className:m.a.rightSide,children:[Object(c.jsx)("h1",{className:m.a.title,children:"Who wants to be a millionaire ?"}),Object(c.jsx)(g,{path:"/game",children:"Start"})]}),Object(c.jsx)("section",{className:m.a.inner})]})},j=n(16),y=n.n(j),v=n(3),O=n(30),w=n(8),q=n.n(w),x=n(14),N=n.n(x),k=function(e){var t=e.title,n=e.letter;return Object(c.jsxs)("div",{className:q.a.question_content,children:[Object(c.jsx)("div",{className:q.a.question_content_letter,children:n}),Object(c.jsx)("div",{className:q.a.question_content_title,children:t})]})},S=function(e){var t=e.title,n=e.letter,i=e.onClick,o=e.id,r=e.correct,s=Object(a.useState)(!1),l=Object(O.a)(s,2),h=l[0],u=l[1],d=Object(a.useMemo)((function(){var e;return N()((e={},Object(v.a)(e,q.a.question_inactive,!0),Object(v.a)(e,q.a.question_wrong,o!==r&&h),Object(v.a)(e,q.a.question_correct,o===r&&h),e))}),[o,r,h]),m=Object(a.useCallback)((function(){i(o),u(!0)}),[o,u,i]);return Object(c.jsxs)("div",{className:q.a.question,children:[Object(c.jsx)("div",{className:q.a.line}),Object(c.jsxs)("div",{className:d,onClick:m,children:[Object(c.jsx)(k,{title:t,letter:n}),Object(c.jsx)("div",{className:q.a.line_right})]})]})},B=Object(a.memo)(S),W=n(10),A="CHECK_THE_ANSWER",G="GAME_OVER",T="TRY_AGAIN",C=n.p+"static/media/winnerClaps.fcf574ff.mp3",F=["A","B","C","D"],I=function(e){var t=e.question,n=e.correct,a=Object(W.b)(),i=new Audio(C),o=function(e){if(e!==n)return a((function(e){e({type:G})}));i.play(),setTimeout((function(){var e;a((function(t){t({type:A,payload:e})}))}),1e3)};return Object(c.jsx)("section",{className:y.a.answersBlock,children:t.map((function(e,t){return Object(c.jsx)(B,{title:e,letter:F[t],id:t,onClick:o,correct:n},e)}))})},P=n(29),U=n.n(P),L=n(7),M=n.n(L),E=function(e){var t=e.wining,n=e.children,i=e.passed,o=Object(a.useMemo)((function(){var e;return N()((e={},Object(v.a)(e,M.a.moneyWin_inactive,!0),Object(v.a)(e,M.a.moneyWin_wining,t),e))}),[t]),r=Object(a.useMemo)((function(){var e;return N()((e={},Object(v.a)(e,M.a.line_left,!0),Object(v.a)(e,M.a.line_left_wining,t),e))}),[t]),s=Object(a.useMemo)((function(){var e;return N()((e={},Object(v.a)(e,M.a.line_right,!0),Object(v.a)(e,M.a.line_right_wining,t),e))}),[t]),l=Object(a.useMemo)((function(){var e;return N()((e={},Object(v.a)(e,M.a.money_content_title,!0),Object(v.a)(e,M.a.money_content_title_wining,t),Object(v.a)(e,M.a.money_content_title_passed,i),e))}),[i,t]);return Object(c.jsxs)("div",{className:M.a.moneyWin,children:[Object(c.jsx)("div",{className:r}),Object(c.jsxs)("div",{className:o,children:[Object(c.jsx)("div",{className:M.a.money_content,children:Object(c.jsx)("h5",{className:l,children:n})}),Object(c.jsx)("div",{className:s})]})]})},R=Object(a.memo)(E),D=n(9),H=function(e){var t=e.turn;return Object(c.jsx)("div",{className:U.a.sideBar,children:D.b.map((function(e,n){return Object(c.jsx)(R,{children:e,wining:n===t-1,passed:n<t-1},e)}))})},J=n(11),K=n.n(J),V=function(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h5",{className:K.a.subTitle,children:"Total score"}),Object(c.jsx)("h4",{className:K.a.title,children:t})]})},$=function(){var e=Object(W.b)(),t=Object(W.c)((function(e){return e.answerReducer})).turn;return Object(c.jsxs)("main",{className:K.a.container,children:[Object(c.jsx)("section",{className:K.a.leftSide,children:Object(c.jsx)("div",{className:K.a.handImgWrapper,children:Object(c.jsx)("img",{src:_,alt:"hand",className:K.a.handImg})})}),Object(c.jsxs)("section",{className:K.a.rightSide,onClick:function(){e((function(e){e({type:T})}))},children:[Object(c.jsxs)(V,{children:[D.b[t-1]," earned"]}),Object(c.jsx)(g,{path:"/game",children:"Try again"})]})]})},Y=function(){var e=Object(W.c)((function(e){return e.answerReducer})),t=e.question,n=e.turn;return e.gameOver?Object(c.jsx)($,{}):Object(c.jsxs)("div",{className:y.a.game,children:[Object(c.jsxs)("main",{className:y.a.main,children:[Object(c.jsx)("h1",{className:y.a.questionTitle,children:t.question}),Object(c.jsx)(I,{question:t.content,correct:t.correct})]}),Object(c.jsx)(H,{turn:n})]})},X=function(){return Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,component:p}),Object(c.jsx)(u.a,{path:"/game",exact:!0,component:Y}),Object(c.jsx)(u.a,{path:"/over",exact:!0,component:$})]})};var Z=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(l,{children:Object(c.jsx)(X,{})})})})},z=n(25),Q=n(12),ee={question:D.a[0].questions[0],currentScore:D.b[0],turn:1,gameOver:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(Q.a)(Object(Q.a)({},e),{},{question:D.a[0].questions[e.turn],turn:e.turn+1});case G:return Object(Q.a)(Object(Q.a)({},e),{},{gameOver:!0});case T:return ee;default:return e}},ne=Object(z.a)({answerReducer:te}),ae=Object(z.b)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(c.jsx)(W.a,{store:ae,children:Object(c.jsx)(Z,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={moneyWin:"SideBarBtn_moneyWin__37VKL",line_left:"SideBarBtn_line_left__1wdsk",line_left_wining:"SideBarBtn_line_left_wining__ZgjFy",line_right:"SideBarBtn_line_right__ZGYaZ",line_right_wining:"SideBarBtn_line_right_wining__2e35X",moneyWin_inactive:"SideBarBtn_moneyWin_inactive__2gJaU",moneyWin_wining:"SideBarBtn_moneyWin_wining__1rNy7",money_content:"SideBarBtn_money_content__1Kn_Y",money_content_title:"SideBarBtn_money_content_title__1vLIG",money_content_title_wining:"SideBarBtn_money_content_title_wining__21xn7",money_content_title_passed:"SideBarBtn_money_content_title_passed__3VZU-"}},8:function(e,t,n){e.exports={question:"Answer_question__1BGB-",line:"Answer_line__1gBqc",line_right:"Answer_line_right__1NMFk",question_inactive:"Answer_question_inactive__ew2JX",question_selected:"Answer_question_selected__2pwLe",question_correct:"Answer_question_correct__85Gof",question_wrong:"Answer_question_wrong__3iSy_",question_content:"Answer_question_content__329TB",question_content_letter:"Answer_question_content_letter__1RT0q",question_content_title:"Answer_question_content_title__1j5fH"}},9:function(e){e.exports=JSON.parse('{"a":[{"questions":[{"question":"In what children\'s game are participants chased by someone designated \\"It\\"?","content":["Tag","Simon Says","Charades","Hopscotch"],"correct":0},{"question":"On a radio, stations are changed by using what control?","content":["Tuning","Volume","Bass","Treble"],"correct":0},{"question":"Which material is most dense?","content":["Silver","Styrofoam","Butter","Gold"],"correct":3},{"question":"Which state in the United States is largest by area?","content":["Alaska","California","Texas","Hawaii"],"correct":0},{"question":"What is Aurora Borealis commonly known as?","content":["Fairy Dust","Northern Lights","Book of ages","a Game of Thrones main character"],"correct":1},{"correct":3,"content":["developed the telescope","discovered four satellites of Jupiter","discovered that the movement of pendulum produces a regular time measurement","All of the above"],"question":"Galileo was an Italian astronomer who"},{"correct":3,"content":["the infrared light kills bacteria in the body","resistance power increases","the pigment cells in the skin get stimulated and produce a healthy tan","the ultraviolet rays convert skin oil into Vitamin D"],"question":"Exposure to sunlight helps a person improve his health because"},{"correct":0,"content":["a club or a local sport association for remarkable achievements","amateur athlete, not necessarily an Olympian","National Olympic Committee for outstanding work","None of the above"],"question":"Sir Thomas Fearnley Cup is awarded to"},{"correct":1,"content":["1968","1929","1901","1965"],"question":"Oscar Awards were instituted in"},{"correct":2,"content":["1998","1989","1979","1800"],"question":"When did Margaret Thatcher became the first female Prime Minister of Britain?"},{"correct":2,"content":["15th April","12th December","1st May","1st August"],"question":"When is the International Workers\' Day?"},{"correct":2,"content":["1962","1963","1964","1965"],"question":"When did China test their first atomic device?"},{"correct":3,"content":["1904","1905","1908","1909"],"question":"When did Commander Robert Peary discover the North Pole?"},{"correct":0,"content":["819/sq. km","602/sq. km","415/sq. km","500/sq. km"],"question":"What is the population density of Kerala?"},{"correct":1,"content":["4 km","25 km","500 m to 9 km","150 km"],"question":"What is the range of missile \'Akash\'?"}]},{"questions":[{"question":"In the U.S., if it\'s not Daylight Saving Time, it\'s what?","content":["Borrowed time","Overtime","Standard time","Party time"],"correct":2},{"question":"Which part of the body are you most likely to \\"stub\\"?","content":["Toe","Knee","Elbow","Brain"],"correct":0},{"question":"Which country is largest by area?","content":["UK","USA","Russia","China"],"correct":2},{"question":"What does the \\"F\\" stand for in FBI?","content":["Foreign","Federal","Flappy","Face"],"correct":1},{"question":"The US declared war on which country after the bombing of Pearl Harbor?","content":["Japan","Russia","Germany","China"],"correct":0},{"correct":0,"content":["Letter of Credit (L/C)","laissezfaire","inflation","None of the above"],"question":"A guarantee to an exporter that the importer of his goods will pay immediately for the goods ordered by him, is known as"},{"correct":3,"content":["Visible light","Infrared radiation","X-rays and gamma rays","Ultraviolet radiation"],"question":"The ozone layer restricts"},{"correct":0,"content":["the first Buddhist pilgrim of China to visit India during the reign of Chandragupta Vikramaditya","the discoverer of Puerto Rico and Jamaica","the first Buddhist pilgrim of India to visit China","None of the above"],"question":"Fa-Hien was"},{"correct":0,"content":["Harvard","University of Washington","Yale","Oxford"],"question":"What was the first university in the United States"},{"correct":0,"content":["The amount of energy it takes to move an electron through a potential difference of 1 volt","The number of volts it takes to move an electon a meter","The number of electrons it takes to kill a human being","The flux of current through a surface parallel to a capacitor"],"question":"An electron volt is"},{"correct":0,"content":["14th November","11th December","15th October","1st July"],"question":"When is the World\'s Diabetes Day?"},{"correct":0,"content":["Kelvin","Celsius","Centigrade","Fahrenheit"],"question":"What is the S.I. unit of temperature?"},{"correct":0,"content":["July 21, 1969","July 21, 1970","July 21, 1963","July 21, 1972"],"question":"When did US astronauts Neil Armstrong and Edwin E. Aldrin land on the moon?"},{"correct":0,"content":["the density of milk increases","the density of milk decreases","the density of milk remains unchanged","it becomes more viscous"],"question":"When cream is separated from milk"},{"correct":0,"content":["1999","1989","1979","1969"],"question":"When did 19 NATO members and 11 \'Partners for Peace\' join hands for peace plan for Kosovo Crisis?"}]},{"questions":[{"question":"An albino gorilla usually has what color fur?","content":["Brown","Black","White","Golden"],"correct":2},{"question":"When you enter a situation without a definite plan of action, you are said to be \\"playing it by\\" what?","content":["Fingertips","Ear","Nose","Mouth"],"correct":1},{"question":"What is commonly known as the \\"Emerald City\\" in the United States?","content":["Palos Verdes, CA","Seattle, WA","New York, NY","Dallas, TX"],"correct":1},{"question":"What is the national emblem of Canada?","content":["Maple Leaf","Brown Bear","Maple Syrup","Waffle"],"correct":0},{"question":"What is the name of the largest freshwater lake in the world?","content":["Lake Union","Lake Superior","Lake Largest","Lake Goodwin"],"correct":0},{"correct":2,"content":["Birds","Cell formation","Relation between organisms and their environment","Tissues"],"question":"Ecology deals with"},{"correct":0,"content":["Earth\'s gravitational pull","Moon\'s gravitational pull","Centripetal force due to the earth\'s rotation","Pressure of the atmosphere"],"question":"The escape velocity of a rocket fired from the earth towards the moon is the velocity required to overcome"},{"correct":3,"content":["was a great Italian painter, sculptor and architect","got universal fame form his masterpiece \\"Mona lisa\\"","drew models of organs such as the heart, lungs and womb","All of the above"],"question":"Leonardo da Vinci"},{"correct":2,"content":["2000","2001","2002","2003"],"question":"Hamid Karzai was chosen president of Afghanistan in"},{"correct":0,"content":["New York, USA","Haque (Netherlands)","Geneva","Paris"],"question":"The headquarters of UN are situated at"},{"correct":2,"content":["friction between the earth and the bus","friction between the passengers and the earth","inertia of the passengers","inertia of the bus"],"question":"When a moving bus stops suddenly, the passenger are pushed forward because of the"},{"correct":1,"content":["1908 at London","1980 at Moscow","1936 at Berlin","1924 at Paris"],"question":"When and where was hockey introduced for women in Olympics?"},{"correct":0,"content":["increase the alkalinity of the soil","increase the acidity of the soil","restore nitrates to the soil","make the soil more porous"],"question":"Lime is sometimes applied to soil in order to"},{"correct":1,"content":["discovered Greenland","travelled through China, India and other parts of Asia","travelled round the cape of Good Hope","discovered Canada"],"question":"Marco Polo"},{"correct":1,"content":["Guruji","Man of Peace","Punjab Kesari","Mahamana"],"question":"Lal Bahadur Shastri is also known as"}]},{"questions":[{"question":"Which of the following consumer goods is the Gerber Products Co. best known for?","content":["Potato chips","Fine wines","Chewing gum","Baby Food"],"correct":3},{"question":"In which of these household appliances would you find a lint screen?","content":["Dishwasher","Microwave oven","Clothes dryer","Trash compactor"],"correct":2},{"question":"What are the three primary colors?","content":["Red, green, blue","Magenta, pink, cyan","Yellow, salmon, brown","White, grey, black"],"correct":0},{"question":"In aviation, what does UFO stand for?","content":["Unified Flying Object","Unitary Flinging Obsession","United Flag Opposition","Unidentified Flying Object"],"correct":3},{"question":"In aviation, what does UFO stand for?","content":["Unified Flying Object","Unitary Flinging Obsession","United Flag Opposition","Unidentified Flying Object"],"correct":3},{"correct":0,"content":["low melting point","high resistance","high melting point","low specific heat"],"question":"For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having"},{"correct":3,"content":["slowing down of economic activity over a limited period","period during which unemployment may rise and demand and output may fall, leading to slump in trade","period that results from accumulation of unsold goods, owing to fall in demand","All of the above"],"question":"Recession is"},{"correct":3,"content":["Nagaland","Arunachal Pradesh","Assam","All of the above"],"question":"Guwahati High Court is the judicature of"},{"correct":0,"content":["Orissa","Tamil nadu","Andhra Pradesh","Kerala"],"question":"Heavy Water Project (Talcher) and Fertilizer plant (Paradeep) are famous industries of"},{"correct":0,"content":["the amount of moisture it can hold decreases","its absolute humidity decreases","its relative humidity remains constant","its absolute humidity increases"],"question":"When a given amount of air is cooled"},{"correct":2,"content":["1789 AD","1798 AD","1792 AD","1729 AD"],"question":"When did France became Republic?"},{"correct":2,"content":["Group A only","Group B only","Group A and O","Group AB only"],"question":"Of the blood groups A, B, AB and O, which one is transfused into a person whose blood group is A?"},{"correct":0,"content":["coins","numbers","stamps","space"],"question":"Numismatics is the study of"},{"correct":2,"content":["a classed unique society","a united society","a classed society","None of the above"],"question":"Karl Marx\'s ideology advocated"},{"correct":0,"content":["Maharashtra","Rajasthan","Madhya Pradesh","Himachal Pradesh"],"question":"Mahabaleshwar is located in"}]},{"questions":[{"question":"What kind of animal traditionally lives in a sty?","content":["Cow","Pig","Fox","Teenager"],"correct":1},{"question":"The EPA urges people to produce less waste by engaging in efforts to reduce, reuse and what?","content":["Recycle","Rewrap","Repossess","Retire"],"correct":0},{"question":"What is the second most common gas in the air?","content":["Nitrogen","Oxygen","Water","Helium"],"correct":1},{"question":"Which month has only 28 days (unless it\'s a leap year)?","content":["March","September","June","Feburary"],"correct":3},{"correct":1,"content":["give","prove","both","None of the above"],"question":"Pythagoras was first to ____ the universal validity of geometrical theorem."},{"correct":0,"content":["George Washington","Bill Clinton","George Bush","None of the above"],"question":"The American General who led the revolt against the British and declared American independence was"},{"correct":0,"content":["1986 at Athens","1988 at Seoul","1924 at St. Louis","1908 at London"],"question":"When and where was weightlifting introduced in Olympics?"},{"correct":1,"content":["Junagarh, Gujarat","Diphu, Assam","Kohima, Nagaland","Gangtok, Sikkim"],"question":"Garampani sanctuary is located at"},{"correct":3,"content":["states that no one was to be imprisoned without a writ or warrant stating the charge against him","provided facilities to a prisoner to obtain either speedy trial or release in bail","safeguarded the personal liberties of the people against arbitrary imprisonment by the king\'s orders","All of the above"],"question":"The Habeas Corpus Act of 1679"},{"correct":1,"content":["1960","1961","1962","1963"],"question":"When did Yuri Alekseyevich Gagaris of Russia, the first man to reach space, reach space?"},{"question":"What are the dimensions of A4 paper?","content":["8.3\\" x 11.7\\"","8.5\\" x 11\\"","30cm x 50cm","8.5\\" x 14\\""],"correct":0},{"correct":2,"content":["energy","speed","distance","intensity"],"question":"Light Year is related to"},{"correct":2,"content":["a type of asset that is in cash in the current account of the commercial bank","a type of asset that is in the form of a deposit in the current account of the commercial bank","either of these","None of the above"],"question":"A liquid asset is"},{"correct":1,"content":["largest airport","highest airport","lowest airport","busiest airport"],"question":"Lhasa airport at Tibet is the World\'s"},{"correct":2,"content":["Ethiopia","Nigeria","Zambia","Chad"],"question":"Which of these African countries is situated south of the equator?"}]}],"b":["$500","$1000","$2,000","$4,000","$8,000","$16,000","$32,000","$64,000","$125,000","$250,000","$500,000","$1,000,000"]}')}},[[46,1,2]]]);
//# sourceMappingURL=main.6cd05dbe.chunk.js.map