const express = require("express");

const Peca = require("../models/Peca");

module.exports = {
  /**
   * @swagger
   * /api/v1/register:
   *  post:
   *    tags:
   *    - Peças
   *    summary: 'Insere uma nova peça'
   *    description: 'Insere uma nova peça'
   *    produces:
   *    - application/json
   *    parameters:
   *    - in: body
   *      name: body
   *      description: Insere uma nova peça
   *      required: true
   *      schema:
   *        type: object
   *        properties:
   *          os:
   *             type: number
   *             example: 111500
   *          nome:
   *             type: string
   *             example: "Api nodeJS"
   *          descricao:
   *             type: string
   *             example: "Documentação Swagger"
   *          peso:
   *             type: number
   *             format: double
   *             example: 1.250
   *          datafabricacao:
   *              type: string
   *              format: date-time
   *              example: "2020-05-19T00:00:00.000Z"
   *    responses:
   *       201:
   *         description:
   *         schema:
   *          $ref: '#/definitions/Insere_peca'
   *       400:
   *          description: "Registration failed"
   *       404:
   *          description: "Part not found"
   *       409:
   *          description: "Duplicate record"
   * definitions:
   *    Insere_peca:
   *       type: object
   *       properties:
   *         _id:
   *            type: string
   *            example: 5e7fa629382a536b82e142cf
   *         os:
   *            type: number
   *            example:  111500
   *         nome:
   *            type: string
   *            example: "Api nodeJS"
   *         descricao:
   *            type: string
   *            example: "Documentação Swagger"
   *         peso:
   *            type: number
   *            format: double
   *            example:
   *               $numberDecimal: "1.25"
   *         datafabricacao:
   *             type: string
   *             format: date-time
   *             example: "2020-05-19T00:00:00.000Z"
   *         updated_at:
   *            type: string
   *            format: date-time
   *            example: "2020-05-19T00:00:00.000Z"
   *         created_at:
   *            type: string
   *            format: date-time
   *            example: "2020-05-19T00:00:00.000Z"
   *         __v:
   *            type: integer
   *            format: 0
   *       xml:
   *          name: 'Peca'
   */
  async create(req, res) {
    try {
      const peca = await Peca.create(req.body);
      return peca == null
        ? res.status(404).json({ message: "Part not found" })
        : res.status(201).send(peca);
    } catch (e) {
      if (e.code == 11000) {
        return res.status(409).json({ error: "Duplicate record" });
      }
      return res.status(400).json({ error: "Registration failed" });
    }
  },

  /**
   * @swagger
   * /api/v1/registers:
   *  get:
   *    tags:
   *    - Peças
   *    summary: 'Busca todas as peças cadastradas'
   *    description: 'Busca todas as peças cadastradas'
   *    produces:
   *    - application/json
   *    responses:
   *       200:
   *         description:
   *         schema:
   *          $ref: '#/definitions/Busca_todas_pecas'
   *       400:
   *          description: "Selection failed"
   *       404:
   *          description: "Part not found"
   * definitions:
   *    Busca_todas_pecas:
   *       type: object
   *       example:
   *         - _id: 5e7fa629382a536b82e142cf
   *           os: 111500
   *           nome: Api nodeJS
   *           descricao: Documentação Swagger
   *           peso:
   *            $numberDecimal: "1.25"
   *           datafabricacao: 2020-05-19T00:00:00.000Z
   *           update_at: 2020-05-19T00:00:00.000Z
   *           created_at: 2020-05-19T00:00:00.000Z
   *         - _id: 5e7fa629382a536b82e142cf
   *           os: 111500
   *           nome: Api nodeJS
   *           descricao: Documentação Swagger
   *           peso:
   *            $numberDecimal: "1.25"
   *           datafabricacao: 2020-05-19T00:00:00.000Z
   *           update_at: 2020-05-19T00:00:00.000Z
   *           created_at: 2020-05-19T00:00:00.000Z
   *           _v: 0
   *       properties:
   *         _id:
   *            type: string
   *         os:
   *            type: number
   *         nome:
   *            type: string
   *         descricao:
   *            type: string
   *         peso:
   *            type: number
   *            format: double
   *         datafabricacao:
   *             type: string
   *             format: date-time
   *         updated_at:
   *            type: string
   *            format: date-time
   *         created_at:
   *            type: string
   *            format: date-time
   *         __v:
   *            type: integer
   *            format: 0
   *       xml:
   *          name: 'Peca'
   *
   */
  async list(req, res) {
    try {
      const pecas = await Peca.find();
      return pecas == null
        ? res.status(404).json({ message: "Part not found" })
        : res.status(200).send(pecas);
    } catch (e) {
      return res.status(400).json({ error: "Selection failed" });
    }
  },

  /**
   * @swagger
   * /api/v1/register/{pecaID}:
   *  get:
   *    tags:
   *    - 'Peças'
   *    summary: 'Buscar uma peça por ID'
   *    description: 'Buscar uma peças por ID'
   *    produces:
   *    - application/json
   *    parameters:
   *    - in: path
   *      name: pecaID
   *      format: string
   *      schema:
   *        type: string
   *      required: true
   *      description: ID da peça para buscar 5e7fa629382a536b82e142cf
   *      Example:
   *        _id: 5e7fa629382a536b82e142cf
   *    responses:
   *       200:
   *         description:
   *         schema:
   *          $ref: '#/definitions/Buscar_pecas_por_id'
   *       400:
   *          description: "Select failed"
   *       404:
   *          description: "Part not found"
   * definitions:
   *    Buscar_pecas_por_id:
   *       type: object
   *       example:
   *         _id: 5e7fa629382a536b82e142cf
   *         os: 111500
   *         nome: Api nodeJS
   *         descricao: Documentação Swagger
   *         peso:
   *           $numberDecimal: "1.25"
   *         datafabricacao: 2020-05-19T00:00:00.000Z
   *         update_at: 2020-05-19T00:00:00.000Z
   *         created_at: 2020-05-19T00:00:00.000Z
   *       properties:
   *         _id:
   *            type: string
   *         os:
   *            type: number
   *         nome:
   *            type: string
   *         descricao:
   *            type: string
   *         peso:
   *            type: number
   *            format: double
   *         datafabricacao:
   *             type: string
   *             format: date-time
   *         updated_at:
   *            type: string
   *            format: date-time
   *         created_at:
   *            type: string
   *            format: date-time
   *         __v:
   *            type: integer
   *            format: 0
   *       xml:
   *          name: 'Peca'
   *
   */
  async select(req, res) {
    try {
      const peca = await Peca.findById(req.params.pecaID);
      return peca == null
        ? res.status(404).json({ message: "Part not found" })
        : res.status(200).send(peca);
    } catch (e) {
      return res.status(400).json({ error: "Select failed" });
    }
  },

  /**
   * @swagger
   * /api/v1/register/{pecaID}:
   *  put:
   *    tags:
   *    - 'Peças'
   *    summary: 'Editar uma peça por ID'
   *    description: 'Editar uma peças por ID'
   *    produces:
   *    - application/json
   *    parameters:
   *    - in: path
   *      name: pecaID
   *      format: string
   *      description: ID da peça que será editado 5e7fa629382a536b82e142cf
   *      required: true
   *    - in: body
   *      name: body
   *      description: Campos que serão editados
   *      required: true
   *      schema:
   *        type: object
   *        properties:
   *          os:
   *             type: number
   *             example: 111500
   *          nome:
   *             type: string
   *             example: "Api nodeJS"
   *          descricao:
   *             type: string
   *             example: "Documentação Swagger"
   *          peso:
   *             type: number
   *             format: double
   *             example: 1.250
   *          datafabricacao:
   *              type: string
   *              format: date-time
   *              example: "2020-05-19T00:00:00.000Z"
   *          updated_at:
   *              type: string
   *              format: date-time
   *              example: "2020-05-19T00:00:00.000Z"
   *    responses:
   *       200:
   *         description:
   *         schema:
   *          $ref: '#/definitions/Editar_peca_por_id'
   *       400:
   *          description: "Update failed"
   *       404:
   *          description: "Part not found"
   * definitions:
   *    Editar_peca_por_id:
   *       type: object
   *       example:
   *         _id: 5e7fa629382a536b82e142cf
   *         os: 111500
   *         nome: Api nodeJS
   *         descricao: Documentação Swagger
   *         peso:
   *           $numberDecimal: "1.25"
   *         datafabricacao: 2020-05-19T00:00:00.000Z
   *         update_at: 2020-05-21T00:00:00.000Z
   *         created_at: 2020-05-19T00:00:00.000Z
   *       properties:
   *         _id:
   *            type: string
   *         os:
   *            type: number
   *         nome:
   *            type: string
   *         descricao:
   *            type: string
   *         peso:
   *            type: number
   *            format: double
   *         datafabricacao:
   *             type: string
   *             format: date-time
   *         updated_at:
   *            type: string
   *            format: date-time
   *         created_at:
   *            type: string
   *            format: date-time
   *         __v:
   *            type: integer
   *            format: 0
   *       xml:
   *          name: 'Peca'
   */
  async update(req, res) {
    try {
      const peca = await Peca.findByIdAndUpdate(req.params.pecaID, req.body, {
        new: true,
      });
      return peca == null
        ? res.status(404).json({ message: "Part not found" })
        : res.status(200).send(peca);
    } catch (e) {
      return res.status(400).json({ error: "Update failed" });
    }
  },

  /**
   * @swagger
   * /api/v1/register/{pecaID}:
   *  delete:
   *    tags:
   *    - 'Peças'
   *    summary: 'Deletar uma peça por ID'
   *    description: 'Deletar uma peças por ID'
   *    produces:
   *    - application/json
   *    parameters:
   *    - in: path
   *      name: pecaID
   *      format: string
   *      schema:
   *        type: string
   *      required: true
   *      description: ID da peça para deletar 5e7fa629382a536b82e142cf
   *      Example:
   *        _id: 5e7fa629382a536b82e142cf
   *    responses:
   *       200:
   *         description: "Successfully deleted"
   *       400:
   *          description: "Deletion failed"
   *       404:
   *          description: "Part not found"
   */
  async delete(req, res) {
    try {
      const peca = await Peca.findByIdAndDelete(req.params.pecaID);
      return peca == null
        ? res.status(404).json({ message: "Part not found" })
        : res.status(200).json({ message: "Successfully deleted" });
    } catch (e) {
      return res.status(400).json({ error: "Deletion failed" });
    }
  },
};
