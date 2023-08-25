package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, echo.Map{"message": "success", "data": "Ping"})
	})

	e.GET("/hello", func(c echo.Context) error {
		return c.JSON(http.StatusOK, echo.Map{"message": "success", "data": "Hello World"})
	})

	e.Logger.Fatal(
		e.Start(":1323"),
	)
}
