package main

import (
	"github.com/codetagon/crud-go-react/bootstrap"
	"github.com/codetagon/crud-go-react/repository"
	"github.com/gofiber/fiber/v2"
)


type Repository repository.Repository

func main() {
	app := fiber.New()
	bootstrap.InitializeApp(app)
}
