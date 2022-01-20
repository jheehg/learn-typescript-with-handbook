declare function create(o: object | null): void;

create({prop: 0});
create(null);

// 아래 원시타입은 모두 파리미터로 사용 불가
create(42);
create('string');
create(false);
create(undefined);
