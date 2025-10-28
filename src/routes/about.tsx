import { createFileRoute } from "@tanstack/react-router";

import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      ...seo({
        title: "About | Igor Wessel",
      }),
    ],
  }),
  component: RouteComponent,
});

const Title = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      id={id}
      className={cn("text-xl md:text-3xl font-bold text-foreground", className)}
    >
      {"> "}
      {children}
    </h2>
  );
};

function RouteComponent() {
  return (
    <div className="pl-4 space-y-12 md:border-l-2 md:border-border ">
      <section aria-labelledby="whoami" className="space-y-6">
        <Title id="whoami" className="mb-6">
          whoami
        </Title>

        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
          Prazer, sou Igor Wessel 👋
        </h3>

        <div className="space-y-6 text-sm/loose md:text-base/loose text-muted-foreground">
          <p>
            Sou desenvolvedor e trabalho principalmente na parte de frontend — o
            famoso cara que "pinta botão" (mas, convenhamos, é bem mais do que
            isso 😂). De vez em quando, minha curiosidade me faz dar uns
            passeios por outras áreas da tecnologia, só pra ver até onde vai
            essa bagunça.
          </p>

          <p>
            Trabalho na área, mas o blog não é sobre códigos e frameworks (ok,
            talvez um pouquinho 😅). A ideia aqui é misturar tech com um pouco
            da vida fora da tela — coisas que me inspiram, me divertem ou
            simplesmente me fazem querer escrever.
          </p>

          <p>
            Sou absurdamente curioso. Quando algo me interessa, mergulho de
            cabeça — pesquiso, testo, fuço... até entender o "porquê" das
            coisas. Acho que essa mistura de curiosidade e teimosia é o que me
            trouxe até aqui.
          </p>

          <p>
            Fora dessa vida de código, eu curto me perder em boas histórias:
            filmes, séries e animes (independente do gênero, eu tô dentro).
            Também passo um bom tempo nos videogames — herança direta do meu
            pai, com quem ainda tenho o privilégio de compartilhar esse hobby.
            🎮
          </p>

          <p>
            E claro — não posso dispensar uma boa cerveja, principalmente
            jogando um game ou curtindo um churrasco de domingo. (Só maluco
            recusa o churrasco no domingo 🍻🔥)
          </p>
        </div>
      </section>

      <section aria-labelledby="fun-facts-list" className="space-y-6">
        <Title id="fun-facts-list">fun-facts --list</Title>
        <ul className="space-y-4 md:space-y-3 text-sm/loose md:text-base/relaxed text-muted-foreground list-['-'] marker:text-primary ml-3 *:pl-3 ">
          <li>
            <span>
              🛹 Andei de skate por 5 anos. Aprendi umas manobras e levei tombos
              dignos de boas histórias.
            </span>
          </li>
          <li>
            <span>
              🎮 Jogo videogame desde pequeno, culpa (ou mérito?) do meu pai,
              que me acompanha nesse hobby desde pequeno.
            </span>
          </li>
          <li>
            <span>
              🍿 Lista infinita de filmes, séries e animes pra assistir… mas
              sempre começo novos antes de terminar os antigos.
            </span>
          </li>
          <li>
            <span>☕ Produtividade começa com café. Sempre.</span>
          </li>
          <li>
            <span>
              🔍 Quando algo me interessa, fico semanas com isso na cabeça.
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="experience-log" className="space-y-6">
        <Title id="experience-log">experience.log</Title>

        <article aria-labelledby="juntos-somos-mais">
          <h3
            id="juntos-somos-mais"
            className="text-lg md:text-xl font-semibold text-foreground mb-3"
          >
            Juntos Somos Mais
          </h3>
          <p className="text-sm/relaxed md:text-base/relaxed text-muted-foreground/80 mb-3 md:mb-4">
            Abril 2022 ~ Presente
          </p>
          <p className="text-sm/relaxed md:text-base/relaxed text-muted-foreground mb-4">
            Aqui foi onde pude realmente expandir meus horizontes como dev —
            tive a chance de mergulhar em várias áreas, sair da zona de conforto
            e lidar com coisas que eu nem imaginava no começo.
          </p>
          <ul className="space-y-3 text-sm/relaxed text-muted-foreground list-['-'] marker:text-primary ml-3 *:pl-3">
            <li>
              <span>
                <strong className="text-foreground">Vue 3:</strong> Nunca tinha
                usado em projetos pessoais, e mergulhar num produto grande, foi
                de grande valia — entender as nuances na migração do Vue 2 — foi
                uma aula prática sobre refatoração, paciência, coordenação.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Web Components:</strong>{" "}
                Explorei os prós e contras dessa abordagem em diferentes
                ambientes (Vue, React, SSR/SSG, Vanilla) e entendi na prática o
                desafio de trabalhar com algo fora do mainstream.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Sentry:</strong> Primeiro
                contato com um sistema de monitoramento de erros. Entendi o
                quanto é valioso ter um sistema de monitoramento de erros, e
                como podemos avaliar o impacto do erro, com base nisso tomar a
                decisão mais adequada.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">React Native:</strong>{" "}
                Encarei de frente o mundo dos apps nativos (Android e iOS). Tive
                que lidar com bugs cabeludos que me levaram até o código em
                Kotlin e Swift — e foi aí que percebi como entender a fundo cada
                plataforma faz toda a diferença.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Azure DevOps:</strong> Meu
                primeiro contato real com CI/CD. Ajustei pipelines de mobile,
                melhorei etapas de build e descobri como automatizar (de
                verdade) o que antes eu fazia na unha.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Kubernetes:</strong> Foi o
                começo da minha aventura no mundo DevOps. Aprendi sobre
                clusters, pods, deployments, services... e como tudo isso
                conversa pra deixar o sistema rodando de forma escalável e
                organizada.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">
                  Arquitetura de Microserviços:
                </strong>{" "}
                Um dos maiores aprendizados. Passei a entender como dividir,
                escalar e organizar um sistema grande — e o que isso implica em
                termos de custo, complexidade e benefícios.
              </span>
            </li>
          </ul>
        </article>

        <article aria-labelledby="nine-worphi">
          <h3
            id="nine-worphi"
            className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3"
          >
            NineWorphi
          </h3>
          <p className="text-sm/relaxed md:text-base/relaxed text-muted-foreground/80 mb-3 md:mb-4">
            Maio 2020 ~ Março 2022
          </p>
          <p className="text-sm/relaxed md:text-base/relaxed text-muted-foreground mb-4">
            Meu primeiro emprego como dev. Foi onde tudo começou — e onde
            aprendi muito sobre o que significa, de fato, trabalhar em uma
            equipe e entregar software de verdade.
          </p>
          <ul className="space-y-3 text-sm/relaxed text-muted-foreground list-['-'] marker:text-primary ml-3 *:pl-3">
            <li>
              <span>
                <strong className="text-foreground">SCRUM:</strong> Aprendi o
                básico (e o valor real) de seguir um processo ágil bem aplicado
                — algo que até hoje carrego comigo.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Git:</strong> Sair do
                "projeto solo" e trabalhar com outras pessoas me fez entender a
                importância de um bom fluxo de versionamento. E como entender
                bem o Git e suas boas práticas, faz uma grande diferença no dia
                a dia.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">React:</strong> Onde tudo se
                consolidou. Trabalhar com React em um projeto real me deu uma
                base sólida que sigo evoluindo até hoje.
              </span>
            </li>
          </ul>
        </article>

        <article aria-labelledby="open-source">
          <h3
            id="open-source"
            className="text-lg md:text-xl font-semibold text-foreground mb-3"
          >
            Open Source
          </h3>
          <p className="text-sm/relaxed md:text-base/relaxed text-muted-foreground mb-4">
            Foi na Juntos Somos Mais onde tive meu primeiro contato com o mundo
            open source — e, honestamente, onde entendi como contribuir de forma
            efetiva para o mundo open source.
          </p>
          <ul className="space-y-3 text-sm/relaxed text-muted-foreground list-['-'] marker:text-primary ml-3 *:pl-3">
            <li>
              <span>
                <strong className="text-foreground">Bun:</strong> Durante a
                criação de um chapter interno sobre React Server Components,
                percebi uma limitação no Bun e vi a oportunidade de contribuir
                com o projeto (
                <a
                  href="https://github.com/oven-sh/bun/pull/9106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-foreground transition-colors"
                >
                  #9106
                </a>
                ) — que acabou sendo aprovado 🎉.
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Stencil:</strong> Após
                atualizar o Stencil no Design System, encontrei um bug no build
                CJS que o Stencil faz no projeto e vi uma oportunidade de
                contribuir com o projeto —{" "}
                <a
                  href="https://github.com/stenciljs/core/pull/6272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary hover:text-foreground transition-colors"
                >
                  #6272
                </a>
                .
              </span>
            </li>
            <li>
              <span>
                <strong className="text-foreground">Path of Building 2:</strong>{" "}
                Como bom viciado em Path of Exile (😅), percebi que a ferramenta
                não tinha suporte pra minha classe no PoE2 — e consegui
                contribuir um pouco com o projeto para o suporte a minha classe.
              </span>
            </li>
          </ul>
        </article>
      </section>

      <section aria-labelledby="exit-code-0">
        <Title id="exit-code-0" className=" mb-4">
          exit --code 0
        </Title>
        <div className="space-y-2 text-base/leading-relaxed text-muted-foreground">
          <p>Sessão terminada.</p>
          <p>Te vejo no próximo commit! 🧑‍💻</p>
        </div>
      </section>
    </div>
  );
}
