'use strict';
(() => {
    (self.webpackChunkfront_projects =
        self.webpackChunkfront_projects || []).push([
        [4370],
        {
            444: (l, i, o) => {
                o.d(i, {
                    Hf: () => _,
                    cq: () => v,
                    l1: () => u,
                    m2: () => f,
                    me: () => g,
                    q_: () => a,
                    s2: () => r,
                    t5: () => p
                });
                var n = o(109);
                const a = 'GET_PLAYER_STATUSES',
                    u = 'FETCH_PLAYER_STATUSES_REQUESTED',
                    r = 'FETCH_PLAYER_STATUSES_SUCCEEDED',
                    p = 'FETCH_PLAYER_STATUSES_FINISHED',
                    g = (0, n.A)(a),
                    v = (0, n.A)(p),
                    f = (0, n.A)(u),
                    _ = (0, n.A)(r);
            },
            871: (l, i, o) => {
                o.d(i, { Q: () => r, a: () => u });
                var n = o(125),
                    a = o(466);
                const u = {
                        RO: 'homeBoardIconsScary',
                        NY: 'homeBoardIconsNY',
                        default: 'homeBoardIcons'
                    },
                    r = [
                        {
                            forJurisdiction: n.RO,
                            name: 'subNavigationMenuIconsScary'
                        },
                        { forEvent: a.MV, name: 'subNavigationMenuIconsNY' },
                        {
                            forJurisdiction: n.CW,
                            name: 'subNavigationMenuIconsCW'
                        }
                    ];
            },
            756: (l, i, o) => {
                o.d(i, { A: () => u });
                const n = 'subscriptionPopupShowed',
                    u = {
                        set: () => localStorage.setItem(n, 'true'),
                        get: () => localStorage.getItem(n),
                        remove: () => localStorage.removeItem(n)
                    };
            },
            944: (l, i, o) => {
                o.d(i, { S: () => Ce });
                var n = o(567);
                const a = o.p + './bonus_games-ca0998b4f6e692dc.svg',
                    u = 'use-href-target',
                    r = '0 0 33 32',
                    p = (0, n.S)({ url: a, id: u, viewBox: r }),
                    g = o.p + './favorites-19371c0a633fc9a0.svg',
                    v = 'use-href-target',
                    f = '0 0 29 26',
                    _ = (0, n.S)({ url: g, id: v, viewBox: f }),
                    x = o.p + './jackpots-484cf9b66ba88497.svg',
                    T = 'use-href-target',
                    I = '0 0 25 26',
                    L = (0, n.S)({ url: x, id: T, viewBox: I }),
                    N = o.p + './live-3f9a9a76d2a0060e.svg',
                    b = 'use-href-target',
                    Y = '0 0 26 26',
                    O = (0, n.S)({ url: N, id: b, viewBox: Y }),
                    B = o.p + './live_rtp-156aebc75958c2c6.svg',
                    W = 'use-href-target',
                    R = '0 0 32 33',
                    U = (0, n.S)({ url: B, id: W, viewBox: R }),
                    D = o.p + './new_games-ace3061c877dc969.svg',
                    G = 'use-href-target',
                    y = '0 0 26 26',
                    F = (0, n.S)({ url: D, id: G, viewBox: y }),
                    j = o.p + './others-52b4c23173eae0e1.svg',
                    H = 'use-href-target',
                    J = '0 0 41 26',
                    K = (0, n.S)({ url: j, id: H, viewBox: J }),
                    M = o.p + './pacanele-596ea7265daca1f2.svg',
                    V = 'use-href-target',
                    Q = '0 0 33 32',
                    z = (0, n.S)({ url: M, id: V, viewBox: Q }),
                    Z = o.p + './recent-45dc68193f32df38.svg',
                    $ = 'use-href-target',
                    k = '0 0 33 32',
                    X = (0, n.S)({ url: Z, id: $, viewBox: k }),
                    q =
                        o.p +
                        './recommended_in_country-1b3846a446ad470f.svg',
                    A = 'use-href-target',
                    Rn = '0 0 33 32',
                    nn = (0, n.S)({ url: q, id: A, viewBox: Rn }),
                    on = o.p + './search-f88f783962297ab3.svg',
                    en = 'use-href-target',
                    sn = '0 0 24 26',
                    tn = (0, n.S)({ url: on, id: en, viewBox: sn }),
                    an = o.p + './show_games-977bd4cae417f50c.svg',
                    un = 'use-href-target',
                    cn = '0 0 33 32',
                    C = (0, n.S)({ url: an, id: un, viewBox: cn }),
                    rn = o.p + './slots-32583f80c453ad57.svg',
                    ln = 'use-href-target',
                    pn = '0 0 28 26',
                    E = (0, n.S)({ url: rn, id: ln, viewBox: pn }),
                    Un = o.p + './sport-0b3e53778ec4f0f4.svg',
                    gn = 'use-href-target',
                    Dn = '0 0 32 32',
                    vn = (0, n.S)({ url: Un, id: gn, viewBox: Dn }),
                    Gn = o.p + './tables-75262ed2984be344.svg',
                    dn = 'use-href-target',
                    mn = '0 0 40 26',
                    fn = (0, n.S)({ url: Gn, id: dn, viewBox: mn }),
                    Nn = o.p + './top-b84ee9407c7f1ac4.svg',
                    w = 'use-href-target',
                    Sn = '0 0 28 26',
                    Pn = (0, n.S)({ url: Nn, id: w, viewBox: Sn }),
                    _n = o.p + './videopokers-4b7cca88d4165211.svg',
                    bn = 'use-href-target',
                    yn = '0 0 25 26',
                    In = (0, n.S)({ url: _n, id: bn, viewBox: yn }),
                    hn = o.p + './bonus_games-4ceb126c735384a3.svg',
                    Bn = 'use-href-target',
                    Mn = '0 0 32 32',
                    An = (0, n.S)({ url: hn, id: Bn, viewBox: Mn }),
                    Cn = o.p + './favorites-e08a8af7556fec60.svg',
                    En = 'use-href-target',
                    wn = '0 0 33 32',
                    xn = (0, n.S)({ url: Cn, id: En, viewBox: wn }),
                    Tn =
                        o.p +
                        './recommended_in_country-b374d018f4cc7d12.svg',
                    Ln = 'use-href-target',
                    e = '0 0 32 34',
                    s = (0, n.S)({ url: Tn, id: Ln, viewBox: e }),
                    t = o.p + './show_games-3fe995f2a45c1493.svg',
                    c = 'use-href-target',
                    d = '0 0 32 32',
                    S = (0, n.S)({ url: t, id: c, viewBox: d }),
                    h = o.p + './bonus_games-1611f3adcc968b7a.svg',
                    Yn = 'use-href-target',
                    On = '0 0 30 32',
                    m = (0, n.S)({ url: h, id: Yn, viewBox: On }),
                    Wn = o.p + './jackpots-8f5127aa6820ce2c.svg',
                    P = 'use-href-target',
                    Fn = '0 0 27 34',
                    jn = (0, n.S)({ url: Wn, id: P, viewBox: Fn }),
                    Hn = o.p + './live-d5da87e3559e1b18.svg',
                    Jn = 'use-href-target',
                    Kn = '0 0 30 32',
                    Vn = (0, n.S)({ url: Hn, id: Jn, viewBox: Kn }),
                    Qn = o.p + './live_rtp-6e76f4dfeffa2b57.svg',
                    zn = 'use-href-target',
                    Zn = '0 0 27 32',
                    $n = (0, n.S)({ url: Qn, id: zn, viewBox: Zn }),
                    kn = o.p + './new_games-e1f1b207273c5f43.svg',
                    Xn = 'use-href-target',
                    qn = '0 0 31 28',
                    no = (0, n.S)({ url: kn, id: Xn, viewBox: qn }),
                    oo = o.p + './others-d1193b5270e2bb57.svg',
                    eo = 'use-href-target',
                    so = '0 0 24 34',
                    io = (0, n.S)({ url: oo, id: eo, viewBox: so }),
                    to = o.p + './pacanele-e367521643293049.svg',
                    ao = 'use-href-target',
                    uo = '0 0 32 32',
                    co = (0, n.S)({ url: to, id: ao, viewBox: uo }),
                    ro = o.p + './recent-7e00fbeb3f5663e5.svg',
                    lo = 'use-href-target',
                    po = '0 0 30 34',
                    go = (0, n.S)({ url: ro, id: lo, viewBox: po }),
                    vo =
                        o.p +
                        './recommended_in_country-ed4cc0adf5a7a456.svg',
                    mo = 'use-href-target',
                    fo = '0 0 33 32',
                    No = (0, n.S)({ url: vo, id: mo, viewBox: fo }),
                    So = o.p + './show_games-7e00fbeb3f5663e5.svg',
                    Po = 'use-href-target',
                    _o = '0 0 30 34',
                    bo = (0, n.S)({ url: So, id: Po, viewBox: _o }),
                    yo = o.p + './slots-04db649bbc281ef4.svg',
                    Io = 'use-href-target',
                    ho = '0 0 34 34',
                    Bo = (0, n.S)({ url: yo, id: Io, viewBox: ho }),
                    Mo = o.p + './sport-39ed2ae396ae2c82.svg',
                    Ao = 'use-href-target',
                    Co = '0 0 33 30',
                    Eo = (0, n.S)({ url: Mo, id: Ao, viewBox: Co }),
                    wo = o.p + './tables-133cc9dbe64b4080.svg',
                    xo = 'use-href-target',
                    To = '0 0 27 34',
                    Lo = (0, n.S)({ url: wo, id: xo, viewBox: To }),
                    Yo = o.p + './top-01434196067515c0.svg',
                    Oo = 'use-href-target',
                    Wo = '0 0 30 32',
                    Ro = (0, n.S)({ url: Yo, id: Oo, viewBox: Wo }),
                    Uo = o.p + './videopokers-91a4b07418f87c17.svg',
                    Do = 'use-href-target',
                    Go = '0 0 29 34',
                    Fo = (0, n.S)({ url: Uo, id: Do, viewBox: Go }),
                    jo = o.p + './jackpots-62255e118921495d.svg',
                    Ho = 'use-href-target',
                    Jo = '0 0 33 33',
                    Ko = (0, n.S)({ url: jo, id: Ho, viewBox: Jo }),
                    Vo = o.p + './live-7fab19f71048a51a.svg',
                    Qo = 'use-href-target',
                    zo = '0 0 33 33',
                    Zo = (0, n.S)({ url: Vo, id: Qo, viewBox: zo }),
                    $o = o.p + './live_rtp-ca8b615b043321a0.svg',
                    ko = 'use-href-target',
                    Xo = '0 0 27 27',
                    qo = (0, n.S)({ url: $o, id: ko, viewBox: Xo }),
                    ne = o.p + './new_games-5e846861afda0199.svg',
                    oe = 'use-href-target',
                    ee = '0 0 33 33',
                    se = (0, n.S)({ url: ne, id: oe, viewBox: ee }),
                    ie = o.p + './others-30771a6e25f1efb4.svg',
                    te = 'use-href-target',
                    ae = '0 0 33 33',
                    ue = (0, n.S)({ url: ie, id: te, viewBox: ae }),
                    ce = o.p + './slots-5a4460391419a6e4.svg',
                    re = 'use-href-target',
                    le = '0 0 33 33',
                    pe = (0, n.S)({ url: ce, id: re, viewBox: le }),
                    ge = o.p + './sport-07b6982c1d5e417e.svg',
                    ve = 'use-href-target',
                    de = '0 0 33 32',
                    me = (0, n.S)({ url: ge, id: ve, viewBox: de }),
                    fe = o.p + './tables-8d615d9cb92b4dc9.svg',
                    Ne = 'use-href-target',
                    Se = '0 0 33 33',
                    Pe = (0, n.S)({ url: fe, id: Ne, viewBox: Se }),
                    _e = o.p + './top-55f9b686705699a1.svg',
                    be = 'use-href-target',
                    ye = '0 0 33 32',
                    Ie = (0, n.S)({ url: _e, id: be, viewBox: ye }),
                    he = o.p + './videopokers-fcce157bf28ba2d1.svg',
                    Be = 'use-href-target',
                    Me = '0 0 33 33',
                    Ae = (0, n.S)({ url: he, id: Be, viewBox: Me }),
                    Ce = {
                        subNavigationMenuIconsScary: {
                            jackpots: Ko,
                            live: Zo,
                            live_rtp: qo,
                            new_games: se,
                            others: ue,
                            slots: pe,
                            sport: me,
                            tables: Pe,
                            top: Ie,
                            videopokers: Ae
                        },
                        subNavigationMenuIconsNY: {
                            new_games: no,
                            live_rtp: $n,
                            live: Vn,
                            bonus_games: m,
                            jackpots: jn,
                            recommended_in_country: No,
                            others: io,
                            pacanele: co,
                            recent: go,
                            videopokers: Fo,
                            show_games: bo,
                            slots: Bo,
                            top: Ro,
                            tables: Lo,
                            sport: Eo
                        },
                        subNavigationMenuIconsCW: {
                            bonus_games: An,
                            recommended_in_country: s,
                            show_games: S,
                            favorites: xn
                        },
                        subNavigationMenuIcons: {
                            bonus_games: p,
                            favorites: _,
                            jackpots: L,
                            live: O,
                            live_rtp: U,
                            new_games: F,
                            others: K,
                            pacanele: z,
                            recent: X,
                            recommended_in_country: nn,
                            search: tn,
                            show_games: C,
                            slots: E,
                            sport: vn,
                            tables: fn,
                            top: Pn,
                            videopokers: In
                        }
                    };
            },
            899: (l, i, o) => {
                o.d(i, { O4: () => u, PZ: () => g, Z_: () => r, ot: () => p });
                var n = o(43),
                    a = o(477);
                const u = !1,
                    r = 6,
                    p = (v, f, _) => ({
                        casinoBonusWagerPercent: {
                            allButtonText: n.A.t('games.any_or_without'),
                            withLabel: !0,
                            description: n.A.t(
                                'games.filter_description.casinoBonusWagerPercent'
                            ),
                            subTitle: f
                                ? void 0
                                : {
                                      text: v
                                          ? n.A.t('games.active_bonus')
                                          : n.A.t('games.no_active_bonus'),
                                      isActive: !!v
                                  },
                            isColorised: !!v,
                            button:
                                !v && !f && _
                                    ? {
                                          children: n.A.t(
                                              'control.choose_bonus'
                                          ),
                                          to: a.Tl.bonuses,
                                          color: 'light'
                                      }
                                    : void 0
                        },
                        providers: { allButtonText: n.A.t('games.all_filter') },
                        volatility: {
                            allButtonText: n.A.t('games.any_filter'),
                            withLabel: !0,
                            isRadio: !0,
                            description: n.A.t(
                                'games.filter_description.volatility'
                            )
                        },
                        payout: {
                            allButtonText: n.A.t('games.any_filter'),
                            withLabel: !0,
                            isRadio: !0,
                            description: n.A.t(
                                'games.filter_description.payout'
                            )
                        },
                        tournaments: { withLabel: !0 }
                    }),
                    g = () => ({
                        new: { oldName: 'new_games' },
                        favorites: {
                            voidContent: 'favorites',
                            withRecommended: !0
                        },
                        with_bonuses: { oldName: 'bonus_games' },
                        recommended: { oldName: 'recommended_in_country' },
                        with_fruits: {
                            oldName: 'pacanele',
                            customUrlName: 'pacanele'
                        },
                        livedealers: { oldName: 'live', customUrlName: 'live' }
                    });
            },
            477: (l, i, o) => {
                o.d(i, { PY: () => r, Tl: () => n, dF: () => u, hZ: () => a });
                const n = {
                        aboutUs: '/info/aboutus',
                        antifraud: '/info/antifraud',
                        authorities: '/info/authorities',
                        betting: '/betting',
                        bettingRules: '/info/betting',
                        blog: '/blogs',
                        bonuses: '/bonuses',
                        bonusPolicy: '/info/bonuspolicy',
                        bonusGames: '/games/with_bonuses',
                        recentGames: '/games/recent',
                        bonusTerms: '/info/bonusestermsandconditions',
                        calendar: '/calendar',
                        cookiePolicy: '/info/cookiepolicy',
                        contacts: '/info/contacts',
                        contactsSE: '/info/secontacts',
                        depositMethods: '/info/infopayments',
                        chatterms: '/info/chatterms',
                        gamesAll: '/games/slots',
                        gamesJackpot: '/games/jackpots',
                        gamesNew: '/games/new',
                        infoPages: '/info',
                        glossary: '/info/glossary',
                        quizzPromo: '/info/quizz-promo',
                        help: '/info/faq',
                        history: '/cabinet/history',
                        historyBonuses: '/cabinet/history/bonuses',
                        historyFriends: '/cabinet/history/friends',
                        historyTransactions: '/cabinet/history/transactions',
                        limits: '/cabinet/limits',
                        live: '/games/live',
                        liveRtp: '/games/live_rtp',
                        lotteries: '/draw',
                        lotto: '/lotto',
                        moneyLaundering: '/info/aml',
                        offers: '/offers',
                        offersconditions: '/info/offersconditions',
                        pacanele: '/games/pacanele',
                        privacyPolicy: '/info/privacypolicy',
                        profile: '/cabinet/user',
                        promoterms: '/info/promoterms',
                        promotions: '/promotions',
                        recommendedInGames: '/games/recommended',
                        records: '/records',
                        responsiblegaming: '/info/responsiblegaming',
                        playsafe: '/info/playsafe',
                        siteMap: '/info/sitemap',
                        statistics: '/statistics',
                        statusProgram: '/info/statusprogram',
                        tableGames: '/games/tables',
                        terms: '/info/termsandconditions',
                        top: '/games/top',
                        tourneys: '/tourneys',
                        unavailable: '/unavailable',
                        verification: '/verification',
                        vip: '/vip',
                        superVip: '/slotvip'
                    },
                    a = {
                        cashier: '#cashier',
                        cashierWithdrawals: '#cashier_withdrawals',
                        gameWithoutDemo: '#game_without_demo',
                        limit: '#limit',
                        login: '#login',
                        recovery_password: '#recovery_password',
                        registration: '#main_registration',
                        reset_password: '#reset_password',
                        unsubscribe: '#unsubscribe',
                        unsubscribeGuest: '#unsubscribe_guest',
                        fortuneWheel: '#fortune-wheel',
                        search: '#search',
                        lotteryGames: '#lottery_games',
                        tournamentGames: '#tournament_games'
                    },
                    u = [
                        '/info',
                        '/cabinet',
                        n.lotteries,
                        n.promotions,
                        n.offers,
                        n.tourneys,
                        n.vip,
                        n.bonuses,
                        n.superVip
                    ],
                    r = { history: 'betHistory', live: 'live' };
            },
            688: (l, i, o) => {
                o.d(i, { Q: () => n.Q, s: () => n.s });
                var n = o(689);
            },
            689: (l, i, o) => {
                o.d(i, { Q: () => a, s: () => n });
                const n = {
                        AboutDemoPopup: 'AboutDemoPopup',
                        ActiveBonusNotAllowedPopup:
                            'ActiveBonusNotAllowedPopup',
                        AgreementPopup: 'AgreementPopup',
                        AvatarListPopup: 'AvatarListPopup',
                        BanWageringBonusPopup: 'BanWageringBonusPopup',
                        BannedInBettingPopup: 'BannedInBettingPopup',
                        BlockPopup: 'BlockPopup',
                        CancellingTransactionPopup:
                            'CancellingTransactionPopup',
                        CannotBeCancelledPopup: 'CannotBeCancelledPopup',
                        CashierPopup: 'CashierPopup',
                        ConditionsPopup: 'ConditionsPopup',
                        ConfirmEmailPopup: 'ConfirmEmailPopup',
                        ConfirmPhonePopup: 'ConfirmPhonePopup',
                        DefaultPopup: 'DefaultPopup',
                        EmailNotification: 'EmailNotification',
                        ExceedBonusLifetimePopup: 'ExceedBonusLifetimePopup',
                        FakePopupForStories: 'FakePopupForStories',
                        FakePopupForConsentMode: 'FakePopupForConsentMode',
                        FakePopupForTabBar: 'FakePopupForTabBar',
                        FortuneWheelPopup: 'FortuneWheelPopup',
                        GameWithoutDemoPopup: 'GameWithoutDemoPopup',
                        HandleLimitPopup: 'HandleLimitPopup',
                        GameModeLimitsPopup: 'GameModeLimitsPopup',
                        GameEnterLimitsPopup: 'GameEnterLimitsPopup',
                        HoldingPopup: 'HoldingPopup',
                        LimitInfoPopup: 'LimitInfoPopup',
                        LimitsPopup: 'LimitsPopup',
                        LimitsPopupAfterRegistration:
                            'LimitsPopupAfterRegistration',
                        LockPopup: 'LockPopup',
                        LoginPopup: 'LoginPopup',
                        LogoutPopup: 'LogoutPopup',
                        ContactsPopup: 'ContactsPopup',
                        SubscriptionNotification: 'SubscriptionNotification',
                        NewBonusSystemPopup: 'NewBonusSystemPopup',
                        NickNamePopup: 'NickNamePopup',
                        PasswordChanging: 'PasswordChanging',
                        PollPopup: 'PollPopup',
                        RecoveryPassword: 'RecoveryPassword',
                        ResetPasswordPopup: 'ResetPasswordPopup',
                        SessionLimitPopup: 'SessionLimitPopup',
                        SpelStopSePopup: 'SpelStopSePopup',
                        TwoStepAuthPopup: 'TwoStepAuthPopup',
                        VerificationWidgetPopup: 'VerificationWidgetPopup',
                        VipRequestPreferencesPopup:
                            'VipRequestPreferencesPopup',
                        VipTermsPopup: 'VipTermsPopup',
                        WelcomeOnboardingPopup: 'WelcomeOnboardingPopup',
                        UnavailableChatPopup: 'UnavailableChatPopup',
                        UnsubscribePopup: 'UnsubscribePopup'
                    },
                    a = {
                        [n.SpelStopSePopup]: 0,
                        [n.BlockPopup]: 10,
                        [n.LockPopup]: 30,
                        [n.HoldingPopup]: 40,
                        [n.AgreementPopup]: 50,
                        [n.FakePopupForConsentMode]: 51,
                        [n.CashierPopup]: 60,
                        [n.BanWageringBonusPopup]: 70,
                        [n.LoginPopup]: 80,
                        [n.GameEnterLimitsPopup]: 90,
                        [n.UnsubscribePopup]: 100,
                        [n.ResetPasswordPopup]: 110,
                        [n.GameWithoutDemoPopup]: 120,
                        [n.FortuneWheelPopup]: 130,
                        [n.FakePopupForStories]: 140,
                        [n.VerificationWidgetPopup]: 150,
                        [n.PollPopup]: 160,
                        [n.LimitsPopup]: 170,
                        [n.BannedInBettingPopup]: 180,
                        [n.RecoveryPassword]: 190,
                        [n.PasswordChanging]: 200,
                        [n.ContactsPopup]: 210,
                        [n.NickNamePopup]: 220
                    };
            },
            691: (l, i, o) => {
                o.d(i, { A: () => a });
                var n = o(540);
                function a({
                    kind: u,
                    isWithoutFallBack: r,
                    isWithoutSendAnalitycs: p,
                    data: g
                }) {
                    n.A.displayPopup(u, g, !!r, !!p);
                }
            },
            690: (l, i, o) => {
                o.d(i, { A: () => n.A });
                var n = o(691);
            },
            694: (l, i, o) => {
                o.d(i, { A: () => a });
                var n = o(540);
                function a({
                    kind: u,
                    isWithoutFallBack: r,
                    isWithoutSendAnalitycs: p,
                    data: g
                }) {
                    n.A.enqueuePopup(u, g, !!r, !!p);
                }
            },
            693: (l, i, o) => {
                o.d(i, { A: () => n.A });
                var n = o(694);
            },
            927: (l, i, o) => {
                (o.r(i), o.d(i, { default: () => Ln }));
                var n = o(447),
                    a = o(928),
                    u = o(929),
                    r = o(931),
                    p = o(932),
                    g = o(933),
                    v = o(935),
                    f = o(937),
                    _ = o(938),
                    x = o(940),
                    T = o(449),
                    I = o(392),
                    L = o(941),
                    N = o(688),
                    b = o(693);
                function Y() {
                    (0, b.A)({ kind: N.s.AgreementPopup });
                }
                const O = (0, n.jP)(I.rL, (0, L.A)(Y));
                var B = o(409);
                const W = 'SHOW_LIMITS_POPUP',
                    R = ({ game: e }) => e && e.data && e.data.id,
                    U = ({ notifications: e }) =>
                        e &&
                        e.currentNotification &&
                        e.currentNotification.kind;
                function* D(e) {
                    const s = yield (0, n.Lt)(R);
                    if (!s) return;
                    const t = e.payload && e.payload.list;
                    if (t) {
                        const d = t.find(h => h.gameId !== void 0),
                            S = d ? d.gameId : null;
                        if (S !== null && S !== s) return null;
                    }
                    ((yield (0, n.Lt)(U)) === 'GameModeLimitsPopup' &&
                        (yield (0, n.yJ)((0, B.fs)())),
                        yield (0, n.T1)(b.A, {
                            kind: N.s.GameModeLimitsPopup,
                            data: e.payload
                        }));
                }
                const G = (0, n.jP)(W, D);
                var y = o(444),
                    F = o(88);
                const j = {
                        fetchPlayerStatuses() {
                            return (0, F.A)({
                                url: '/api/player_statuses/list'
                            });
                        }
                    },
                    H = ({ playerStatuses: e }) => e;
                function* J(e) {
                    const { cb: s } = (e == null ? void 0 : e.payload) || {},
                        { statuses: t } = yield (0, n.Lt)(H);
                    if (t.length !== 0) {
                        yield (0, n.yJ)((0, y.cq)());
                        return;
                    }
                    yield (0, n.yJ)((0, y.m2)());
                    try {
                        const { success: c, payload: d } = yield (0, n.T1)(
                            j.fetchPlayerStatuses
                        );
                        c &&
                            (yield (0, n.yJ)((0, y.Hf)(d)),
                            yield (0, n.T1)(() => (s == null ? void 0 : s(d))));
                    } catch (c) {
                    } finally {
                        yield (0, n.yJ)((0, y.cq)());
                    }
                }
                const K = (0, n.jP)(y.q_, J);
                var M = o(125),
                    V = o(129);
                const Q = 'SHOW_NEW_STATUS_SYSTEM_POPUP',
                    z = ({ user: e }) => ({
                        isGuest: e.isGuest,
                        jurisdiction: e.jurisdiction
                    });
                function* Z() {
                    const { isGuest: e, jurisdiction: s } = yield (0, n.Lt)(z),
                        t = (0, V.A)(s, [M.CW, M.MT]);
                    e ||
                        !t ||
                        (yield (0, n.T1)(b.A, {
                            kind: N.s.NewBonusSystemPopup
                        }));
                }
                const $ = (0, n.jP)(Q, Z);
                var k = o(690),
                    X = o(109);
                const q = 'ACTIVE_BONUS_NOT_ALLOWED',
                    A = 'BANNED_IN_BETTING',
                    Rn = (0, X.A)(A),
                    nn = 'UNBANNED_IN_BETTING';
                function* on() {
                    yield (0, n.T1)(k.A, {
                        kind: N.s.ActiveBonusNotAllowedPopup
                    });
                }
                const en = (0, n.jP)(q, on);
                function* sn() {
                    yield (0, n.yJ)((0, I.TK)({ bannedInBetting: !0 }));
                }
                const tn = (0, n.jP)(A, sn);
                function* an() {
                    yield (0, n.yJ)((0, I.TK)({ bannedInBetting: !1 }));
                }
                const un = (0, n.jP)(nn, an),
                    cn = [tn, un, en];
                var C = o(428),
                    rn = o(43),
                    ln = o(943),
                    pn = o(466),
                    E = o(871);
                const gn =
                        e =>
                        ({ notAvailableForDomains: s }) => {
                            if (!s) return !0;
                            for (let t = 0; t < s.length; t += 1)
                                return !e.includes(s[t]);
                        },
                    vn =
                        e =>
                        ({ forEvent: s }) =>
                            s === e,
                    dn =
                        e =>
                        ({ forJurisdiction: s }) =>
                            s === e;
                function mn(e, s, t) {
                    let c;
                    switch (t) {
                        case pn.MV:
                            return ((c = E.Q.filter(vn(t))[0].name), c);
                        default:
                            return (
                                (c = E.Q.filter(dn(e)).filter(gn(s))),
                                c.length ? c[0].name : 'subNavigationMenuIcons'
                            );
                    }
                }
                var fn = o(899);
                const Nn = [
                    { name: 'top', priority: { RO: 10, default: 20 } },
                    { name: 'favorites', priority: 30 },
                    { name: 'recent', priority: 35 },
                    { name: 'recommended', priority: 40 },
                    { name: 'with_bonuses', priority: 50 },
                    { name: 'with_fruits', priority: 60 },
                    { name: 'live_rtp', priority: 70 },
                    { name: 'livedealers', priority: 80 },
                    { name: 'tables', priority: 90 },
                    { name: 'new', priority: 100 },
                    { name: 'slots', priority: 110 },
                    { name: 'jackpots', priority: { RO: 20, default: 120 } },
                    { name: 'videopokers', priority: 130 },
                    { name: 'others', priority: 140 }
                ];
                var w = o(944);
                const Sn = ({ category: e, icon: s }) =>
                        w.S[e][s] || w.S.subNavigationMenuIcons[s],
                    Pn = ['winning_now'];
                function _n(e, s, t, c) {
                    const S = [...e].filter(m => !Pn.includes(m.name)),
                        h = (0, ln.A)(S, Nn, s),
                        Yn = (0, fn.PZ)(),
                        On = mn(s, t, c);
                    return h.map(({ name: m, totalSize: Wn }) => {
                        const P = Yn[m];
                        return {
                            title: rn.A.t(`game_menu.categories.${m}`),
                            link: `/games/${(P == null ? void 0 : P.customUrlName) || m}`,
                            isShow: !(P != null && P.isHiddenInSubMenuGames),
                            isTranslated: !0,
                            icon: Sn({
                                icon: (P == null ? void 0 : P.oldName) || m,
                                category: On
                            }),
                            name: m,
                            totalSize: Wn
                        };
                    });
                }
                const bn = ({ user: e, meta: s, siteEvent: t }) => ({
                    jurisdiction: e.jurisdiction,
                    domainJurisdictions: s.domainJurisdictions,
                    currentSiteEvent: t.current
                });
                function* yn(e) {
                    const s = e.payload,
                        {
                            jurisdiction: t,
                            domainJurisdictions: c,
                            currentSiteEvent: d
                        } = yield (0, n.Lt)(bn),
                        S = yield (0, n.T1)(_n, s, t, c, d);
                    yield (0, n.yJ)((0, C.Yx)(S));
                }
                const In = (0, n.jP)(C.KB, yn),
                    hn = ({ notifications: e, user: s }) => ({
                        isGuest: s.isGuest,
                        userSessionLimitMinutesLeft:
                            s.userSessionLimitMinutesLeft,
                        isHasOpenedPopup: !!e.currentNotification,
                        isLimitReminderShowed: s.isLimitReminderShowed
                    });
                function* Bn() {
                    const {
                        isGuest: e,
                        userSessionLimitMinutesLeft: s,
                        isHasOpenedPopup: t,
                        isLimitReminderShowed: c
                    } = yield (0, n.Lt)(hn);
                    e ||
                        !s ||
                        t ||
                        c ||
                        (yield (0, n.T1)(b.A, {
                            kind: N.s.SessionLimitPopup,
                            isWithoutFallBack: !0
                        }));
                }
                const Mn = (0, n.p8)(I.dg, Bn);
                function* An() {
                    yield (0, n.T1)(b.A, {
                        kind: N.s.ExceedBonusLifetimePopup
                    });
                }
                const Cn = (0, n.jP)(B.jr, An);
                var En = o(945),
                    wn = o(756);
                function* xn(e) {
                    (yield (0, n.T1)(En.fu, e), yield (0, n.T1)(wn.A.remove));
                }
                const Tn = (0, n.p8)('LOGOUT_USER', xn);
                function* Ln() {
                    yield (0, n.Q7)([
                        (0, u.A)(),
                        In,
                        ...f.A,
                        G,
                        K,
                        v.A,
                        Tn,
                        _.A,
                        p.A,
                        (0, g.A)(),
                        Mn,
                        O,
                        Cn,
                        $,
                        (0, x.A)(),
                        a.Ay,
                        r.A,
                        T.A,
                        ...cn
                    ]);
                }
            }
        }
    ]);
})();

//# sourceMappingURL=[preload]-sagas-763b1ed6.build.js.map
