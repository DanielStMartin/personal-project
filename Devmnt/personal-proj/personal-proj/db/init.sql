drop table if exists game;
drop table if exists admin;

create table admin(
    id serial primary key,
    username varchar(20) not null,
    password varchar(64) not null,
    full_name text
);
insert into admin (username, password, full_name)
values ('danielstmartin', 'myPassword', 'Daniel St Martin');
create table game(
    game_id serial primary key,
    title varchar(25) not null,
    Synopsis text,
    cover_art text,
    admin_id integer references admin(id)
);
insert into game(name, description, image, admin_id)
values
('Assassin Creed Odyssey',"[Action Adventure » Open-World]", "https://gamefaqs.akamaized.net/box/1/5/4/687154_front.jpg", 1),
("Persona 5","[Role-Playing » Japanese-Style]", "https://gamefaqs.akamaized.net/box/3/2/0/607320_front.jpg", 1)