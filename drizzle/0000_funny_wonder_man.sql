CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar NOT NULL,
	"isMember" boolean DEFAULT false,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
