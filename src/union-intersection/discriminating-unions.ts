// 타입추론의 범위를 좁혀나갈 수 있는 리터럴 타입의 단일 필드로 유니언을 구별한다.

type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    }
};

// NetworkState이라는 대표 타입을 만듦.
type NetworkState = 
| NetworkLoadingState 
| NetworkFailedState
| NetworkSuccessState;

function networkStatus(state: NetworkState) {
    // 모든 타입이 공통된 필드를 가지지 않으므로 오류. 
    // state.code;

    // state은 공통필드 이므로 이 리터럴 값에 따른 처리를 개벌적으로 한다.
    switch (state.state) {
        case 'loading':
            break;
        case 'failed':
            break;
        case 'success':
            break;
    
        default:
            break;
    }
}