create table leads
(
    id         bigserial primary key,
    created_at timestamp    not null default now(),
    name       varchar(100) not null,
    phone      varchar(100) not null,
    email      varchar(100),
    message    text         not null
);